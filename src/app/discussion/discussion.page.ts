import { Component, OnInit } from '@angular/core';
import { SavePostAction, SetSearchText } from './store/discussion/discussion.actions';
import { State } from './store/app.store';
import { Store } from '@ngrx/store';
import { getSearchText, getPostsArr } from './store/discussion/discussion.selector';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Post } from './discussion.model';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.page.html',
  styleUrls: ['./discussion.page.scss'],
})
export class DiscussionPage implements OnInit {
  posts$: Observable<Post[]>;

  private postForm: FormGroup;

  searchInput: FormControl;
  searchText$: Observable<string>;
  posts: Post[];

  /**
   * Constructor
   * @param {Store<State>} store 
   * @param {FormBuilder} formBuilder 
   */
  constructor(
    private store: Store<State>,
    private formBuilder: FormBuilder
  ) {
    this.searchInput = new FormControl('');
    this.posts$ = this.store.select(getPostsArr);

    this.searchText$ = this.store.select(getSearchText);
    //Post Form
    this.postForm = this.formBuilder.group({
      content: ['', Validators.required]
    });

  }

  /**
   * Submit New Post
   */
  submitPost() {
    this.store.dispatch(new SavePostAction(this.postForm.get('content').value));
    this.postForm.reset();
  }

  /**
   * On Init Method
   */
  ngOnInit() {
    this.searchText$.subscribe(searchText => {
      this.searchInput.setValue(searchText);
    });

    this.posts$.subscribe(data => {
      this.posts = data;
    });

    //Search based on input 
    this.searchInput.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(searchText => {
      this.store.dispatch(new SetSearchText(searchText));
    });
  }

}
