import { QuestionBase } from './question-base';

export class RadioQuestion extends QuestionBase<string> {
    controlType = 'radio';
    options: {key: string, value: string} [] = [];

    constructor(options: {} = {}) {
        super(options);
        // tslint:disable-next-line: no-string-literal
        this.options = options['options'] || [];
      }
}
