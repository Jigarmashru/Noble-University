import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentcertificateComponent } from 'src/app/component/admin/studentcertificate/studentcertificate.component';
import { StudentcomplaintComponent } from 'src/app/component/admin/studentcomplaint/studentcomplaint.component';
import { StudentdataComponent } from 'src/app/component/admin/studentdata/studentdata.component';
import { StudentfeedbackComponent } from 'src/app/component/admin/studentfeedback/studentfeedback.component';
import { StudentleaveComponent } from 'src/app/component/admin/studentleave/studentleave.component';
import { StudentupdateComponent } from 'src/app/component/admin/studentupdate/studentupdate.component';

const routes: Routes = [
  {
    path:'',redirectTo:'student_data',pathMatch:'full'
  },
  {
    path:'student_data',component : StudentdataComponent
  },
  {
    path:'student_update/:id',component: StudentupdateComponent
  },
  {
    path:'student_cerificate',component: StudentcertificateComponent
  },
  {
    path:'student_complaint',component: StudentcomplaintComponent
  },
  {
    path:'student_feedback',component: StudentfeedbackComponent
  },
  {
    path:'student_leave',component: StudentleaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
