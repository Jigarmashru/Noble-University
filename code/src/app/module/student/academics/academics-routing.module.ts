import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddleaveapplicationComponent } from 'src/app/component/student/addleaveapplication/addleaveapplication.component';
import { AttendenceComponent } from 'src/app/component/student/attendence/attendence.component';
import { OldpaperdownloadComponent } from 'src/app/component/student/oldpaperdownload/oldpaperdownload.component';
import { TimetableComponent } from 'src/app/component/student/timetable/timetable.component';
import { TodaysteachingupdateComponent } from 'src/app/component/student/todaysteachingupdate/todaysteachingupdate.component';
import { ViewlessonplanComponent } from 'src/app/component/student/viewlessonplan/viewlessonplan.component';

const routes: Routes = [
  {
    path:'',redirectTo:'timetable',pathMatch:'full'
  },
  {
    path:'timetable',component : TimetableComponent
  },
  {
    path:'todays_teaching_update',component : TodaysteachingupdateComponent
  },
  {
    path:'attendence',component : AttendenceComponent
  },
  {
    path:'add_leave_application',component : AddleaveapplicationComponent
  },
  {
    path:'view_lesson_plan',component : ViewlessonplanComponent
  },
  {
    path:'old_paper_download',component : OldpaperdownloadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicsRoutingModule { }
