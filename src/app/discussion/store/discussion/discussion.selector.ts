import { createSelector } from "@ngrx/store";
import { DiscussionState } from "./discussion.reducer";
import { getDiscussionAppState, State } from "../app.store";

export const getDiscussionsState = createSelector(
    getDiscussionAppState,
    (state: State) => state.discussion
);

export const getPostComments = createSelector(
    getDiscussionsState,
    (state: DiscussionState, id: number) => state.comments[id]
)

export const getSearchText = createSelector(
    getDiscussionsState,
    (state: DiscussionState) => state.searchText
);

export const getPosts = createSelector(
    getDiscussionsState,
    (state: DiscussionState) => state.posts
);

export const getPostsArr = createSelector(
    getPosts,
    getSearchText,
    (entities, searchText) => {
        let arr = entities.filter(entity => {
            return entity.content.toLowerCase().includes(searchText);
        });
        console.log(arr);
        return arr;
    }
);