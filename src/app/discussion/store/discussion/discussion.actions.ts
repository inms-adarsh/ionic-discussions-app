import { Action } from '@ngrx/store';

export const LOAD_POSTS = '[Discussion] Load Posts';
export const LOAD_POSTS_SUCCESS = '[Discussion] Load Posts Success';
export const LOAD_POSTS_FAIL = '[Discussion] Load Posts Fail';
export const SAVE_POST = '[Discussion] Save Post';
export const SAVE_POST_SUCCESS = '[Discussion] Save Post Success';
export const SAVE_POST_FAIL = '[Discussion] Save Post Fail';
export const LOAD_POST_COMMENTS = '[Discussion] Load Post Comments';
export const LOAD_POST_COMMENTS_SUCCESS = '[Discussion] Load Post Comments Success';
export const SAVE_COMMENT = '[Discussion] Save Comment';
export const SAVE_COMMENT_SUCCESS = '[Discussion] Save Comment Success';
export const SAVE_COMMENT_FAIL = '[Discussion] Save Comment Fail';
export const SET_SEARCH_TEXT = '[Discussion] SET SEARCH TEXT';
export const LIKE_POST = '[Discussion] Like Post';
export const LIKE_POST_SUCCESS = '[Discussion] Like Post Success';
export const LIKE_POST_FAIL = '[Discussion] Like Post Fail';
/**
 * 
 * Load Discussion Actions
 */
export class LoadPostsAction implements Action {
  readonly type = LOAD_POSTS;

  constructor(public payload: any) { }
}

export class LoadPostsSuccessAction implements Action {
  readonly type = LOAD_POSTS_SUCCESS;

  constructor(public payload: any) { }
}

export class LoadPostsFailAction implements Action {
  readonly type = LOAD_POSTS_FAIL;

  constructor(public error: Error) { }
}


export class SavePostAction implements Action {
  readonly type = SAVE_POST;

  constructor(public payload: any) {

  }
}

export class SavePostSuccessAction implements Action {
  readonly type = SAVE_POST_SUCCESS;

  constructor(public payload: any) {

  }
}

export class SavePostFailAction implements Action {
  readonly type = SAVE_POST_FAIL;

  constructor(public error: Error) {

  }
}

export class SavePostCommentAction implements Action {
  readonly type = SAVE_COMMENT;

  constructor(public payload: any) {

  }
}

export class SavePostCommentSuccessAction implements Action {
  readonly type = SAVE_COMMENT_SUCCESS;

  constructor(public payload: any) {

  }
}

export class SavePostCommentFailAction implements Action {
  readonly type = SAVE_COMMENT_FAIL;

  constructor(public error: Error) {

  }
}


/**
 * Set Search Text
 */
export class SetSearchText implements Action
{
    readonly type = SET_SEARCH_TEXT;

    constructor(public payload: string)
    {
    }
}


export class LoadPostCommentsAction implements Action {
  readonly type = LOAD_POST_COMMENTS;

  constructor(public payload: any) {

  }
}

export class LoadPostCommentsSuccessAction implements Action {
  readonly type = LOAD_POST_COMMENTS_SUCCESS;

  constructor(public payload: any) {

  }
}

export class LikePostAction implements Action {
  readonly type = LIKE_POST;

  constructor(public payload: any) {

  }
}


export class LikePostSuccessAction implements Action {
  readonly type = LIKE_POST_SUCCESS;

  constructor(public payload: any) {

  }
}

export class LikePostFailAction implements Action {
  readonly type = LIKE_POST_FAIL;

  constructor(public error: Error) {

  }
}

export type Actions =
  | LoadPostsAction
  | LoadPostsSuccessAction
  | LoadPostsFailAction
  | SavePostAction
  | SavePostSuccessAction
  | SavePostFailAction
  | LoadPostCommentsAction
  | LoadPostCommentsSuccessAction
  | SavePostCommentFailAction
  | SavePostCommentAction
  | SavePostCommentSuccessAction
  | SetSearchText
  | LikePostAction
  | LikePostSuccessAction
  | LikePostFailAction;