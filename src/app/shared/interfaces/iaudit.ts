import { IQuestions } from './i-questions';

export interface Iaudit {
    Auditor_Name: string;
    General_Comment: string;
    Id_Audit: number;
    OU: string;
    Operation: string;
    Questions: Array<IQuestions>;
    Status: number;
    TS_Add: string;
    TS_Load?: string;
    Team_Station_Job: string;
    URL: string;
}
