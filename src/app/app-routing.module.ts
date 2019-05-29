import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'questions', pathMatch: 'full' },
  { path: 'discussion', loadChildren: './discussion/discussion.module#DiscussionPageModule' },
  { path: 'questions', loadChildren: './questionnaire/questionnaire.module#QuestionnaireModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
