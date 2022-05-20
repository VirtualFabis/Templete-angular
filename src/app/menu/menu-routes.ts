import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from 'src/app/layout/full/full.component';
import { SchedulecalendarComponent } from './pages/schedulecalendar/schedulecalendar.component';
import { QflassignpageComponent } from './pages/qflassignpage/qflassignpage.component';
import { QuestionsComponent } from './pages/questions/questions.component';


const MENU_ROUTES: Routes = [
    {
        path: 'menu',
        component: FullComponent,
        children: [
            {
                path: 'calendario',
                component: SchedulecalendarComponent
            },
            {
                path: 'tabla',
                component: QflassignpageComponent
            },
            {
                path: 'preguntas',
                component: QuestionsComponent
            }
        ]
    }
];
export const ROUTES = RouterModule.forChild(MENU_ROUTES);
