import { Answer } from '../class/answer';

export interface IQuestions {
  Id_Question: number;
  _Question: string;
  Id_Audit: number;
  Id_Question_Type: number;
  Answer: Answer;
}
