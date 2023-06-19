import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HocSinhsComponent } from './student/students.component';
import { LopsComponent } from './class/class.component';

const routes: Routes = [
  { path: 'hoc-sinhs', component: HocSinhsComponent },
  { path: 'lops', component: LopsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
