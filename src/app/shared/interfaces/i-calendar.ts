import { IQuestions } from './i-questions';


export interface ICalendar {
    id: string;
    title: string;
    start: string;
    allDay: boolean;
    startEditable: boolean;
    end: Date;
    index: number;
    Id_Audit: number;
    Auditor_Name: string;
    General_Comment: string;
    OU: string;
    Operation: string;
    Questions: Array<IQuestions>;
    Status: number;
    TS_Add: string;
    TS_Load: string;
    Team_Station_Job: string;
    URL: string;
    color: string;
}
