export class QuestionBase<T> {
    value: T;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    type: string;
    valueComment?: string;
    keyComment?: string;
    disabled?: boolean;
    // tslint:disable-next-line: variable-name
    Id_Question_Type: number;
    options: {key: string, value: string}[];

    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        required?: boolean,
        order?: number,
        controlType?: string,
        type?: string,
        disabled?: boolean,
        valueComment?: string,
        keyComment?: string,
        Id_Question_Type?: number
    } = {}) {
        this.value = options.value;
        this.key = options.key;
        this.label = options.label;
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.type = options.type || '';
        this.disabled = options.disabled;
        this.valueComment = options.valueComment;
        this.keyComment = options.keyComment;
        this.Id_Question_Type = options.Id_Question_Type;
    }
}
