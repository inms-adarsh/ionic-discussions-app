import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../discussion.model';
import { Store } from '@ngrx/store';
import { State } from '../../store/app.store';
import { LoadPostCommentsAction, LikePostAction } from '../../store/discussion/discussion.actions';
import { getPostComments } from '../../store/discussion/discussion.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input()
  post: Post;

  showComments: boolean;
  comments$: Observable<any>;

  constructor(
    private store: Store<State>
  ) {
    
   }

   /**
    * ng on Init
    */
  ngOnInit() {
    this.comments$ = this.store.select(getPostComments, this.post.id);
  }

  /**
   * Toggle post comments
   */
  togglePostComments() {
    this.showComments = !this.showComments;
  }

  /**
   * Like Post for post Id
   */
  likePost() {
    this.store.dispatch(new LikePostAction(this.post.id));
  }
}
