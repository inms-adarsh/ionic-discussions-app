import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.scss']
})
export class MultipleChoiceComponent implements OnInit {
  
  @Input()
  question: any;

  constructor() { }

  ngOnInit() {
  }

}
