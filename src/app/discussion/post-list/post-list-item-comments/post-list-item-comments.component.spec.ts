import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListItemCommentsComponent } from './post-list-item-comments.component';

describe('PostListItemCommentsComponent', () => {
  let component: PostListItemCommentsComponent;
  let fixture: ComponentFixture<PostListItemCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListItemCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListItemCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
