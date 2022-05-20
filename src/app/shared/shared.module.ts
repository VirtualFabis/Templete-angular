import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './components/calendar/calendar.component';

// Calendar JS
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { TableComponent } from './components/table/table.component';

// Modulos
import { MaterialModule } from '../material/material.module';
import { EditableDirective } from './directives/editable.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './components/dynamic-form-question/dynamic-form-question.component';
import { LoadingComponent } from './components/loading/loading.component';
import { TableDynamicComponent } from './components/table-dynamic/table-dynamic.component';


FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin
]);

@NgModule({
    declarations: [
        CalendarComponent,
        TableComponent,
        EditableDirective,
        DynamicFormComponent,
        DynamicFormQuestionComponent,
        LoadingComponent,
        TableDynamicComponent
    ],
    imports: [
        CommonModule,
        FullCalendarModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        CalendarComponent,
        TableComponent,
        DynamicFormComponent,
        LoadingComponent,
        TableDynamicComponent
    ]
})
export class SharedModule { }
