import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankComponent } from './layout/blank/blank.component';

const routes: Routes = [{
  path: '',
  component: BlankComponent,
  children: [{
    path: '',
    redirectTo: '/authentication/login',
    pathMatch: 'full',
  }, {
    path: 'authentication',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
