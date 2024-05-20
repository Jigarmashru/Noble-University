import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangepasswordComponent } from 'src/app/component/student/changepassword/changepassword.component';
import { MyprofileComponent } from 'src/app/component/student/myprofile/myprofile.component';

const routes: Routes = [
  {
    path:'',redirectTo:'my_profile',pathMatch:'full'
  },
  {
    path:'my_profile',component : MyprofileComponent
  },
  {
    path:'change_password',component : ChangepasswordComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
