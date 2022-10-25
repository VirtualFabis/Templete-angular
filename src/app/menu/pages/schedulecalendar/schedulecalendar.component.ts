import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-schedulecalendar',
  templateUrl: './schedulecalendar.component.html',
  styleUrls: ['./schedulecalendar.component.scss'],
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
export class SchedulecalendarComponent implements OnInit {

  calendarOp = [];

  constructor() { }

  ngOnInit(): void {
  }

}
