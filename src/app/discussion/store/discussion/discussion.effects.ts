import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of as observableOf } from 'rxjs/observable/of';
import { switchMap } from 'rxjs/operators/switchMap';
import { map } from 'rxjs/operators/map';
import { catchError } from 'rxjs/operators/catchError';
import { DiscussionService } from './discussion.service';
import * as discussionActions from './discussion.actions';

@Injectable()
export class DiscussionEffects {
  @Effect() loadPosts$;

  constructor(
    private discussionService: DiscussionService,
    private actions$: Actions
  ) {
    this.loadPosts$ = this.actions$
      .ofType(discussionActions.LOAD_POSTS)
      .pipe(switchMap((state: discussionActions.LoadPostsAction) =>
        this.discussionService.loadPosts().pipe(
          // If successful, dispatch success action with result
          map(res => new discussionActions.LoadPostsSuccessAction(res)),
          // If request fails, dispatch failed action
          catchError((err: Error) => observableOf(new discussionActions.LoadPostsFailAction(err)))
        )
      )
      );
  }

  @Effect()
  savePost$ = this.actions$
    .ofType(discussionActions.SAVE_POST)
    .pipe(switchMap((state: discussionActions.SavePostAction) =>
      this.discussionService.savePost(state.payload).pipe(
        // If successful, dispatch success action with result
        map(res => new discussionActions.SavePostSuccessAction(res)),
        // If request fails, dispatch failed action
        catchError((err: Error) => observableOf(new discussionActions.SavePostFailAction(err)))
      )
    ))

  @Effect()
  savePostSuccess$ = this.actions$
    .pipe(
      ofType(discussionActions.SAVE_POST_SUCCESS),
      // If successful, dispatch success action with result
      map(res => new discussionActions.LoadPostsAction(res))
    )

  @Effect()
  loadPostComments$ = this.actions$
    .ofType(discussionActions.LOAD_POST_COMMENTS)
    .pipe(switchMap((state: discussionActions.LoadPostCommentsAction) =>
      this.discussionService.loadComments(state.payload).pipe(
        // If successful, dispatch success action with result
        map(res => {
          return new discussionActions.LoadPostCommentsSuccessAction({
            id: state.payload,
            comments: res
          });
        })
      )
    ))

  @Effect()
  saveComment$ = this.actions$
    .ofType(discussionActions.SAVE_COMMENT)
    .pipe(switchMap((state: discussionActions.SavePostAction) =>
      this.discussionService.saveComment(state.payload).pipe(
        // If successful, dispatch success action with result
        map(res => new discussionActions.SavePostCommentSuccessAction(res)),
        // If request fails, dispatch failed action
        catchError((err: Error) => observableOf(new discussionActions.SavePostCommentFailAction(err)))
      )
  ))

  @Effect()
  saveCommentSuccess$ = this.actions$    
  .pipe(
    ofType(discussionActions.SAVE_COMMENT_SUCCESS),
    map(res => new discussionActions.LoadPostCommentsAction(res))
  )
}
