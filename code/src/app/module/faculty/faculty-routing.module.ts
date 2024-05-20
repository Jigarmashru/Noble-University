import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentprofileComponent } from 'src/app/component/faculty/studentprofile/studentprofile.component';
import { FacultyComponent } from './faculty.component';
import { StudentcomplaintComponent } from 'src/app/component/faculty/studentcomplaint/studentcomplaint.component';
import { StudentleaveComponent } from 'src/app/component/faculty/studentleave/studentleave.component';
import { HolidayComponent } from 'src/app/component/faculty/holiday/holiday.component';
import { AnnouncementComponent } from 'src/app/component/faculty/announcement/announcement.component';
import { VisitorcontactusComponent } from 'src/app/component/faculty/visitorcontactus/visitorcontactus.component';
import { VisitorenrollnowComponent } from 'src/app/component/faculty/visitorenrollnow/visitorenrollnow.component';
import { UpdatestudentComponent } from 'src/app/component/faculty/updatestudent/updatestudent.component';
import { ProfileComponent } from 'src/app/component/faculty/profile/profile.component';
import { FacultypswchangeComponent } from 'src/app/component/faculty/facultypswchange/facultypswchange.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'main', pathMatch: 'full'
  },
  {
    path: 'main', component: FacultyComponent, children: [
      {
        path:'',redirectTo:'student_profile',pathMatch:'full'
      },
      {
        path:'student_profile',component : StudentprofileComponent
      },
      {
        path:'student_complaint',component : StudentcomplaintComponent
      },
      {
        path:'student_leave',component : StudentleaveComponent
      },
      {
        path:'holiday',component : HolidayComponent
      },
      {
        path:'announcement',component : AnnouncementComponent
      },
      {
        path:'visitor_contact_us',component : VisitorcontactusComponent
      },
      {
        path:'visitor_enroll_now',component : VisitorenrollnowComponent
      },
      {
        path:'student_update/:id',component : UpdatestudentComponent
      },
      {
        path:'faculty_profile',component : ProfileComponent
      },
      {
        path:'faculty_password_change',component : FacultypswchangeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultyRoutingModule { }
