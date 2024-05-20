import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultyRoutingModule } from './faculty-routing.module';
import { FacultyComponent } from './faculty.component';
import { FacultyfooterComponent } from 'src/app/component/faculty/facultyfooter/facultyfooter.component';
import { FacultyheaderComponent } from 'src/app/component/faculty/facultyheader/facultyheader.component';
import { HolidayComponent } from 'src/app/component/faculty/holiday/holiday.component';
import { StudentcomplaintComponent } from 'src/app/component/faculty/studentcomplaint/studentcomplaint.component';
import { StudentleaveComponent } from 'src/app/component/faculty/studentleave/studentleave.component';
import { StudentprofileComponent } from 'src/app/component/faculty/studentprofile/studentprofile.component';
import { VisitorcontactusComponent } from 'src/app/component/faculty/visitorcontactus/visitorcontactus.component';
import { VisitorenrollnowComponent } from 'src/app/component/faculty/visitorenrollnow/visitorenrollnow.component';
import { AnnouncementComponent } from 'src/app/component/faculty/announcement/announcement.component';
import { UpdatestudentComponent } from 'src/app/component/faculty/updatestudent/updatestudent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from 'src/app/component/faculty/profile/profile.component';
import { FacultypswchangeComponent } from 'src/app/component/faculty/facultypswchange/facultypswchange.component';


@NgModule({
  declarations: [
    FacultyComponent,
    StudentprofileComponent,
    StudentcomplaintComponent,
    StudentleaveComponent,
    HolidayComponent,
    AnnouncementComponent,
    VisitorcontactusComponent,
    VisitorenrollnowComponent,
    FacultyheaderComponent,
    FacultyfooterComponent,
    UpdatestudentComponent,
    ProfileComponent,
    FacultypswchangeComponent
  ],
  imports: [
    CommonModule,
    FacultyRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FacultyModule { }
