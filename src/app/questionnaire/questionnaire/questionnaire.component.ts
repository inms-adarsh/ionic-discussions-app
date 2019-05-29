import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { QuestionnaireService } from '../questionnaire.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  questions$: Observable<any>;

  constructor(private questionnaireService: QuestionnaireService, private el: ElementRef) {     
    this.questions$ = this.questionnaireService.getQuestions();
  }

  ngOnInit() {
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let elements = this.el.nativeElement.querySelectorAll('.inner_wrapper');
    //we'll do some stuff here when the window is scrolled
    elements.forEach((elem) => {
      var etop = elem.getBoundingClientRect().top;
      var diff = etop - window.pageYOffset;

      // console.log(etop);
      // console.log(window.pageYOffset);

      if (this.elementInViewport(elem)) {
        this.reinitState(elem, elements);
      }
    });
  }

  reinitState(elem, elements) {
    elements.forEach(elem => {
      elem.classList.remove('focus');
    })
    elem.classList.add('focus');
  }

  elementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
  
    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
  
    return (
      top < (window.pageYOffset + window.innerHeight) &&
      left < (window.pageXOffset + window.innerWidth) &&
      (top + height) > window.pageYOffset &&
      (left + width) > window.pageXOffset
    );
  }
}
