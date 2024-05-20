import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ELearningRoutingModule } from './e-learning-routing.module';
import { ELearningComponent } from './e-learning.component';
import { EnrolltolearningmanagementgroupComponent } from 'src/app/component/student/enrolltolearningmanagementgroup/enrolltolearningmanagementgroup.component';
import { ViewlearningmanagementgroupComponent } from 'src/app/component/student/viewlearningmanagementgroup/viewlearningmanagementgroup.component';


@NgModule({
  declarations: [
    ELearningComponent,
    EnrolltolearningmanagementgroupComponent,
    ViewlearningmanagementgroupComponent
  ],
  imports: [
    CommonModule,
    ELearningRoutingModule
  ]
})
export class ELearningModule { }
