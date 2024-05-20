import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicsRoutingModule } from './academics-routing.module';
import { AcademicsComponent } from './academics.component';
import { AcademicoverviewComponent } from 'src/app/component/visitor/academicoverview/academicoverview.component';
import { BestpracticesComponent } from 'src/app/component/visitor/bestpractices/bestpractices.component';
import { ExamcornerComponent } from 'src/app/component/visitor/examcorner/examcorner.component';


@NgModule({
  declarations: [
    AcademicsComponent,
    AcademicoverviewComponent,
    BestpracticesComponent,
    ExamcornerComponent
  ],
  imports: [
    CommonModule,
    AcademicsRoutingModule
  ]
})
export class AcademicsModule { }
