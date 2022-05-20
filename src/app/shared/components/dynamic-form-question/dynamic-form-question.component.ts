import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from '../../class/question-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.scss']
})
export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<string>;
  @Input() form: FormGroup;
  @Input() valid;

  get isValid() {
    return this.form.controls[this.question.key].valid; // && this.form.controls[this.question.keyComment];
  }

  validate(key) {
    // console.log('EDDY', key);
  }

  getTitle(type: number) {
    // console.log(`DynamicFormQuestionComponent -> getTitle -> test`, type);
    return false;
  }
}
