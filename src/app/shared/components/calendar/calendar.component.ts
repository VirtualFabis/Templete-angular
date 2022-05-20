import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { EventApi, DateSelectArg, EventClickArg, CalendarOptions } from '@fullcalendar/core';
import { INITIAL_EVENTS } from 'src/app/event-utils';

import { ICalendar } from '../../interfaces/i-calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  calendarVisible = true;
  // currentEvents = INITIAL_EVENTS;
  @Input() datos: any = [];
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,listWeek'
    },
    initialView: 'dayGridMonth',
    views: {
    },
    // initialEvents: null,
    weekends: true,
    editable: false,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    events: []
    // eventsSet: this.handleEvents.bind(this)
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  };
  events: ICalendar[] = [];
  // tslint:disable-next-line: variable-name
  constructor() {
  }

  ngOnInit() {
  }


  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
  }

  handleEventClick(clickInfo: EventClickArg) {
  }

  handleEvents(events: EventApi[]) {
  }
}
