export interface IColumns {
    idHeader: number;
    columnDef: string;
    header: string;
    // tslint:disable-next-line: ban-types
    cell?: Function;
}
