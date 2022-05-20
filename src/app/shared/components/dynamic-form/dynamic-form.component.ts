import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { QuestionBase } from '../../class/question-base';
import { FormGroup, Validators } from '@angular/forms';
import { QuestionControlService } from '../../services/question-control.service';

import { Answer } from '../../class/answer';
import { IAnswer } from '../../interfaces/i-answer';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: QuestionBase<string>[] = [];
  form: FormGroup;
  payLoad = '';
  listAnswer: Array<Answer>;
  response: IAnswer;
  loading: boolean;

  @ViewChild('content', { static: true }) content: ElementRef;

  constructor(private qcs: QuestionControlService) { }

  ngOnInit(): void {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = this.form.getRawValue();
    if (this.form.valid) {
    } else {
    }
  }

  getIndex(answer: Answer) {
    return answer;
  }
}
