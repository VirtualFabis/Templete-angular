import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QflassignpageComponent } from './pages/qflassignpage/qflassignpage.component';
import { SchedulecalendarComponent } from './pages/schedulecalendar/schedulecalendar.component';
import { FullComponent } from '../layout/full/full.component';
import { ROUTES } from './menu-routes';
import { SidebarComponent } from '../layout/full/sidebar/sidebar.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { QuestionsComponent } from './pages/questions/questions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [QflassignpageComponent, SchedulecalendarComponent, SidebarComponent, FullComponent, QuestionsComponent],
  imports: [
    CommonModule,
    ROUTES,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FullComponent
  ],
})
export class MenuModule { }
