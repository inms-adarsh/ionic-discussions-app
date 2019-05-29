import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-answer',
  templateUrl: './text-answer.component.html',
  styleUrls: ['./text-answer.component.scss']
})
export class TextAnswerComponent implements OnInit {

  @Input()
  question: any;
  
  constructor() { }

  ngOnInit() {
  }

  gotoNext() {
    
  }
}
