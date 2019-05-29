import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DiscussionPage } from './discussion.page';
import { StoreReduxorModule } from './store/store-reduxor.module';
import { DiscussionsResolveGuard } from './store/discussion/discussion.guard';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list/post-list-item/post-list-item.component';
import { PostListItemCommentsComponent } from './post-list/post-list-item-comments/post-list-item-comments.component';

const routes: Routes = [
  {
    path: '',
    component: DiscussionPage,
    canActivate: [DiscussionsResolveGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    StoreReduxorModule
  ],
  declarations: [DiscussionPage, PostListComponent, PostListItemComponent, PostListItemCommentsComponent],
  providers: [DiscussionsResolveGuard]  
})
export class DiscussionPageModule {}
