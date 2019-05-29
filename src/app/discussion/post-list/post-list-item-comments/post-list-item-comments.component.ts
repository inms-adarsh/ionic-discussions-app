import { Component, OnInit, Input } from '@angular/core';
import { getPostComments } from '../../store/discussion/discussion.selector';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from '../../store/app.store';
import { Observable } from 'rxjs';
import { SavePostCommentAction, LoadPostCommentsAction } from '../../store/discussion/discussion.actions';
import { PostComments } from '../../discussion.model';

@Component({
  selector: 'app-post-list-item-comments',
  templateUrl: './post-list-item-comments.component.html',
  styleUrls: ['./post-list-item-comments.component.scss']
})
export class PostListItemCommentsComponent implements OnInit {

  @Input()
  postId: number;

  private commentsForm : FormGroup;

  postComments$: Observable<PostComments[]>;
  postComments: PostComments[];

  /**
   * Constructor
   * @param store 
   * @param formBuilder 
   */
  constructor(
    private store: Store<State>,
    private formBuilder: FormBuilder 
  ) {
    //Post Form
    this.commentsForm = this.formBuilder.group({
      comment: ['', Validators.required]
    });

  }

  /**
   * Submit New Comment
   */
  submitComment() {
    this.store.dispatch(new SavePostCommentAction({
      comment: this.commentsForm.get('comment').value,
      postId: this.postId
    }));
    this.commentsForm.reset();
  }

  /**
   * On Init method
   */
  ngOnInit(): void {    
    this.store.dispatch(new LoadPostCommentsAction(this.postId));

    this.postComments$ = this.store.select(getPostComments, this.postId);

    this.postComments$.subscribe(data => {
      this.postComments = data;
    });
  }

}
