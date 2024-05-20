import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminannouncementComponent } from 'src/app/component/admin/adminannouncement/adminannouncement.component';
import { AdminchangepasswordComponent } from 'src/app/component/admin/adminchangepassword/adminchangepassword.component';
import { AdminfooterComponent } from 'src/app/component/admin/adminfooter/adminfooter.component';
import { AdminheaderComponent } from 'src/app/component/admin/adminheader/adminheader.component';
import { AdminholidayComponent } from 'src/app/component/admin/adminholiday/adminholiday.component';
import { FacultydataComponent } from 'src/app/component/admin/facultydata/facultydata.component';
import { FacultyupdateComponent } from 'src/app/component/admin/facultyupdate/facultyupdate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    AdminchangepasswordComponent,
    AdminholidayComponent,
    AdminannouncementComponent,
    AdminheaderComponent,
    AdminfooterComponent,
    FacultydataComponent,
    FacultyupdateComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
