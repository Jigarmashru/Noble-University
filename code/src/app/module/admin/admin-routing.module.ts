import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { StudentModule } from './student/student.module';
import { AdminchangepasswordComponent } from 'src/app/component/admin/adminchangepassword/adminchangepassword.component';
import { VisitorModule } from './visitor/visitor.module';
import { AdminholidayComponent } from 'src/app/component/admin/adminholiday/adminholiday.component';
import { AdminannouncementComponent } from 'src/app/component/admin/adminannouncement/adminannouncement.component';
import { FacultydataComponent } from 'src/app/component/admin/facultydata/facultydata.component';
import { FacultyupdateComponent } from 'src/app/component/admin/facultyupdate/facultyupdate.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'main', pathMatch: 'full'
  },
  {
    path: 'main', component: AdminComponent, children: [
      {
        path:'',redirectTo:'student',pathMatch:'full'
      },
      {
        path:'student',loadChildren: () => StudentModule
      },
      {
        path:'change_password',component: AdminchangepasswordComponent
      },
      {
        path:'visitor',loadChildren:() => VisitorModule
      },
      {
        path:'holiday',component: AdminholidayComponent
      },
      {
        path:'announcement',component : AdminannouncementComponent
      },
      {
        path:'faculty_data',component : FacultydataComponent
      },
      {
        path:'faculty_update/:id',component : FacultyupdateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
