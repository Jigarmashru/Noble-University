import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrolltolearningmanagementgroupComponent } from 'src/app/component/student/enrolltolearningmanagementgroup/enrolltolearningmanagementgroup.component';
import { ViewlearningmanagementgroupComponent } from 'src/app/component/student/viewlearningmanagementgroup/viewlearningmanagementgroup.component';

const routes: Routes = [
  {
    path:'',redirectTo:'enroll_to_learning_management_group',pathMatch:'full'
  },
  {
    path:'enroll_to_learning_management_group',component : EnrolltolearningmanagementgroupComponent
  },
  {
    path:'view_learning_management_group',component : ViewlearningmanagementgroupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ELearningRoutingModule { }
