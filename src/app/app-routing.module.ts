import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule } from '@angular/router';
import {HighprioritylistComponent} from './highprioritylist/highprioritylist.component';
  import { from } from 'rxjs';

import {MediumprioritylistComponent} from './mediumprioritylist/mediumprioritylist.component';
import {LowprioritylistComponent} from './lowprioritylist/lowprioritylist.component';
import { HighpriorityviewComponent } from './highpriorityview/highpriorityview.component';
import { MediumpriorityviewComponent } from './mediumpriorityview/mediumpriorityview.component';
import { LowpriorityviewComponent } from './lowpriorityview/lowpriorityview.component';
import { UpdatehighprioritylistComponent } from './updatehighprioritylist/updatehighprioritylist.component';
const routes: Routes = [
  
  {path: 'highprioritylist', component: HighprioritylistComponent},
  {path: 'mediumprioritylist', component: MediumprioritylistComponent},
  {path: 'lowprioritylist', component: LowprioritylistComponent},
  {path: 'highpriorityview', component: HighpriorityviewComponent},
  {path: 'mediumpriorityview', component: MediumpriorityviewComponent},
  {path: 'lowpriorityview', component: LowpriorityviewComponent},
  {path: 'updatehighprioritylist', component: UpdatehighprioritylistComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
