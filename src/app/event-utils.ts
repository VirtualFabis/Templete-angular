import { EventInput } from '@fullcalendar/angular';

let eventGuid = 0;
const TODAY_STR = new Date('07-13-2020').toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today
const YESTERDAY = new Date();
const saturday = new Date('07-19-2020').toISOString().replace(/T.*$/, '');

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'Auditoria 1',
    start: TODAY_STR,
    end: saturday
  },
  {
    id: createEventId(),
    title: 'Auditoria 2',
    start: TODAY_STR,
    end: saturday
  }
];

export function createEventId() {
  return String(eventGuid++);
}

