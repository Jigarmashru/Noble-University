import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { MyprofileComponent } from 'src/app/component/student/myprofile/myprofile.component';
import { ChangepasswordComponent } from 'src/app/component/student/changepassword/changepassword.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileComponent,
    MyprofileComponent,
    ChangepasswordComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
