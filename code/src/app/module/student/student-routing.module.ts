import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';
import { AnnouncementComponent } from 'src/app/component/student/announcement/announcement.component';
import { CancellationComponent } from 'src/app/component/student/cancellation/cancellation.component';
import { CertificateComponent } from 'src/app/component/student/certificate/certificate.component';
import { FeedbackforfacultyComponent } from 'src/app/component/student/feedbackforfaculty/feedbackforfaculty.component';
import { HolidaysComponent } from 'src/app/component/student/holidays/holidays.component';
import { NewgrievanceregistrationComponent } from 'src/app/component/student/newgrievanceregistration/newgrievanceregistration.component';
import { PrivacypolicyComponent } from 'src/app/component/student/privacypolicy/privacypolicy.component';
import { TermsconditionComponent } from 'src/app/component/student/termscondition/termscondition.component';
import { ContactusComponent } from 'src/app/component/student/contactus/contactus.component';
import { AcademicsModule } from './academics/academics.module';
import { ELearningModule } from './e-learning/e-learning.module';
import { ExamModule } from './exam/exam.module';
import { FeesModule } from './fees/fees.module';
import { HomeModule } from './home/home.module';
import { HostelModule } from './hostel/hostel.module';
import { ProfileModule } from './profile/profile.module';

const routes: Routes = [
  {
    path: '', redirectTo: 'main', pathMatch: 'full'
  },
  {
    path: 'main', component: StudentComponent, children: [
      {
        path:'',redirectTo:'home',pathMatch:'full'
      },
      {
        path:'profile',loadChildren: () => ProfileModule
      },
      {
        path:'home',loadChildren: () => HomeModule
      },
      {
        path:'fees',loadChildren:() => FeesModule
      },
      {
        path:'academics',loadChildren:() => AcademicsModule
      },
      {
        path:'holidays',component : HolidaysComponent
      },
      {
        path:'announcement',component : AnnouncementComponent
      },
      {
        path:'exam',loadChildren:() => ExamModule
      },
      {
        path:'new_grievance_registration',component:NewgrievanceregistrationComponent
      },
      {
        path:'e-learning',loadChildren : () => ELearningModule
      },
      {
        path:'hostel',loadChildren : () => HostelModule
      },
      {
        path:'certificate',component:CertificateComponent
      },
      {
        path:'feedback_for_faculty',component:FeedbackforfacultyComponent
      },
      {
        path:'privacy_policy',component:PrivacypolicyComponent
      },
      {
        path:'terms_conditions',component:TermsconditionComponent
      },
      {
        path:'contact_us',component:ContactusComponent
      },
      {
        path:'cancellation_policy',component:CancellationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
