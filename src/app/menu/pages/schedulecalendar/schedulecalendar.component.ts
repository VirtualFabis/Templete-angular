import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedulecalendar',
  templateUrl: './schedulecalendar.component.html',
  styleUrls: ['./schedulecalendar.component.scss']
})
export class SchedulecalendarComponent implements OnInit {

  calendarOp = [];

  constructor() { }

  ngOnInit(): void {
  }

}
