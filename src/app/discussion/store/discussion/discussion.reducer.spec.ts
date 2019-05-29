import { reducer } from './discussion.reducer';
import * as fromDiscussion from './discussion.reducer';

describe('DiscussionReducer', () => {

  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = reducer(undefined, action);
      expect(result).toEqual(fromDiscussion.initialState);
  });
});

});