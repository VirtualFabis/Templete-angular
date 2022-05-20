import { Injectable } from '@angular/core';
import { QuestionBase } from '../class/question-base';
import { DropdownQuestion } from '../class/dropdown-question';
import { TextboxQuestion } from '../class/textbox-question';
import { of } from 'rxjs';
import { RadioQuestion } from '../class/radio-question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  getQuestions() {
    const questions: QuestionBase<string> [] = [];
    questions.push(
      new RadioQuestion({
        key: String(1),
        label: 'Seleciona una opcion',
        required: true,
        value: '',
        disabled: false,
        Id_Question_Type: 1,
        options: [
          {key: 'YES', value: 'SI'},
          {key: 'NO', value: 'NO'}
        ],
        order: 1
      }),
      new TextboxQuestion({
        key: '2',
        label: 'Comentarios',
        required: false,
        order: 2,
        value: '',
        disabled: false,
        Id_Question_Type: 2
      })
    );
    return of(questions.sort((a, b) => a.order - b.order));
  }
}
