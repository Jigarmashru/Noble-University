import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicsRoutingModule } from './academics-routing.module';
import { AcademicsComponent } from './academics.component';
import { AddleaveapplicationComponent } from 'src/app/component/student/addleaveapplication/addleaveapplication.component';
import { AttendenceComponent } from 'src/app/component/student/attendence/attendence.component';
import { OldpaperdownloadComponent } from 'src/app/component/student/oldpaperdownload/oldpaperdownload.component';
import { TimetableComponent } from 'src/app/component/student/timetable/timetable.component';
import { TodaysteachingupdateComponent } from 'src/app/component/student/todaysteachingupdate/todaysteachingupdate.component';
import { ViewlessonplanComponent } from 'src/app/component/student/viewlessonplan/viewlessonplan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AcademicsComponent,
    TimetableComponent,
    TodaysteachingupdateComponent,
    AttendenceComponent,
    AddleaveapplicationComponent,
    ViewlessonplanComponent,
    OldpaperdownloadComponent
  ],
  imports: [
    CommonModule,
    AcademicsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AcademicsModule { }
