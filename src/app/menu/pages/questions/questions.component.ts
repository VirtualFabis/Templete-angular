import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Iaudit } from 'src/app/shared/interfaces/iaudit';
import { Observable } from 'rxjs';
import { QuestionBase } from 'src/app/shared/class/question-base';
import { QuestionService } from '../../../shared/services/question.service';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  audit: Iaudit;
  questions$: Observable<QuestionBase<any>[]>;

  constructor(private service: QuestionService) { }

  ngOnInit(): void {
    this.audit = JSON.parse(localStorage.getItem('audit'));
    this.questions$ = this.service.getQuestions();
  }
}
