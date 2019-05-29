import * as discussion from './discussion.actions';
import { Post } from '../../discussion.model';

export interface DiscussionState {
  comments: {};
  loading: boolean;
  posts: Post[];
  error: Error;
  type: string;
  searchText: string;
};

export const initialState: DiscussionState = {
  loading: false,
  posts: [],
  error: null,
  type: '',
  comments: {},
  searchText: ''
};

export function reducer(state = initialState, action: discussion.Actions): DiscussionState {
  switch (action.type) {
    case discussion.LOAD_POSTS: {
      return {
        ...state,
        loading: true,
        error: null,
        type: action.type
      }
    }

    case discussion.LOAD_POSTS_SUCCESS: {
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: null,
        type: action.type
      };
    }

    case discussion.LOAD_POSTS_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.error,
        type: action.type
      };
    }

    case discussion.SAVE_POST_SUCCESS: {
      return {
        ...state,
        loading: false,
        posts: [...state.posts, action.payload],
        type: action.type
      };
    }

    case discussion.LOAD_POST_COMMENTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        comments: {
          ...state.comments,
          [action.payload.id]: action.payload.comments
        },
        type: action.type
      };
    }

    case discussion.SAVE_COMMENT_SUCCESS: {
      const newComment = {
        id: action.payload.id,
        postId: action.payload.postId,
        comment: action.payload.comment
      };

      return {
        ...state,
        loading: false,
        comments: {
          ...state.comments,
          [action.payload.postId]: [newComment, ...state.comments[action.payload.postId]]
        },
        type: action.type
      };
    }

    case discussion.SET_SEARCH_TEXT: {
      return {
        ...state,
        searchText: action.payload
      };
    }

    case discussion.LIKE_POST: {
      return {
        ...state,
        posts: state.posts.map((item, i) => {
          return item.id === action.payload ? { ...item, noOfLikes: item.noOfLikes + 1 } : item;
        })
      }
    }

    default: {
      return state;
    }
  }
}
