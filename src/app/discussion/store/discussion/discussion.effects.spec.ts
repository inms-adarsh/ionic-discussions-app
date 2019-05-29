import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { DiscussionEffects } from "./discussion.effects";
import { DiscussionService } from "./discussion.service";

describe('DiscussionEffects', () => {
  let runner, discussionEffects, discussionService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [],
    providers: [
      DiscussionEffects,
      {
        provide: DiscussionService,
        useValue: jasmine.createSpyObj('discussionService', ['get'])
      }
    ]
  }));

  beforeEach(() => {
    discussionEffects = TestBed.get(DiscussionEffects);
    discussionService = TestBed.get(DiscussionService);
  });

  describe('discussion$', () => {

    it('should return a LOAD_POSTS_SUCCESS action, on success', function () {

    });

    it('should return a LOAD_POSTS_FAIL action, on error', function () {

    });

  });

});
