import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionnaireRoutingModule } from './questionnaire-routing.module';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { MultipleChoiceComponent } from './multiple-choice/multiple-choice.component';
import { TextAnswerComponent } from './text-answer/text-answer.component';
import { ContinueButtonComponent } from './continue-button/continue-button.component';
import { FormsModule } from '@angular/forms';
import { SelectedOptionsComponent } from './multiple-choice/selected-options/selected-options.component';

@NgModule({
  declarations: [QuestionnaireComponent, MultipleChoiceComponent, TextAnswerComponent, ContinueButtonComponent, SelectedOptionsComponent],
  imports: [
    CommonModule,
    QuestionnaireRoutingModule,
    HttpClientModule,
    IonicModule,
    FormsModule
  ]
})
export class QuestionnaireModule { }
