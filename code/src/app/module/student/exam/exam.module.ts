import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamRoutingModule } from './exam-routing.module';
import { ExamComponent } from './exam.component';
import { HallticketComponent } from 'src/app/component/student/hallticket/hallticket.component';
import { ResultComponent } from 'src/app/component/student/result/result.component';


@NgModule({
  declarations: [
    ExamComponent,
    HallticketComponent,
    ResultComponent
  ],
  imports: [
    CommonModule,
    ExamRoutingModule
  ]
})
export class ExamModule { }
