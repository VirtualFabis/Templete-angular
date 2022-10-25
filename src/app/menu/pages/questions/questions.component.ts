import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Iaudit } from 'src/app/shared/interfaces/iaudit';
import { Observable } from 'rxjs';
import { QuestionBase } from 'src/app/shared/class/question-base';
import { IColumns } from 'src/app/shared/interfaces/i-columns';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  animations: [
    trigger('miTrigger', [
      transition(':enter', [
        style({opacity: 0, height: 0}),
        animate('0.7s', style({opacity: 1, height: '*'})),
      ]),
      transition(':leave', [
        animate('0.7s', style({opacity: 0, height: 0}))
      ])
    ]),
  ]
})
export class QuestionsComponent implements OnInit {
  audit: Iaudit;
  questions$: Observable<QuestionBase<any>[]>;
  columns: Array<IColumns> = [
    {
      idHeader: 0,
      columnDef: 'task',
      header: 'Task',
    },
    {
      idHeader: 1,
      columnDef: 'desc',
      header: 'Desc',
    },
  ]
  rows: Array<any> = []
  owo: any
  constructor(    private authentication: AuthenticationService,    ) { }

  ngOnInit(): void {
    this.owo = this.authentication.getUser().id
    this.table()
  }
  table() {
    this.authentication
      .ListTask({ id: this.owo })
      .subscribe((response: any) => {
        this.rows = response
      })
  }
}
