import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { StudentcertificateComponent } from 'src/app/component/admin/studentcertificate/studentcertificate.component';
import { StudentdataComponent } from 'src/app/component/admin/studentdata/studentdata.component';
import { StudentfeedbackComponent } from 'src/app/component/admin/studentfeedback/studentfeedback.component';
import { StudentupdateComponent } from 'src/app/component/admin/studentupdate/studentupdate.component';
import { StudentcomplaintComponent } from 'src/app/component/admin/studentcomplaint/studentcomplaint.component';
import { StudentleaveComponent } from 'src/app/component/admin/studentleave/studentleave.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StudentComponent,
    StudentdataComponent,
    StudentupdateComponent,
    StudentcertificateComponent,
    StudentcomplaintComponent,
    StudentfeedbackComponent,
    StudentleaveComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StudentModule { }
