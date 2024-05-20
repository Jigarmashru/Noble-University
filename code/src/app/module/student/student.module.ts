import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { StudentfooterComponent } from 'src/app/component/student/studentfooter/studentfooter.component';
import { StudentheaderComponent } from 'src/app/component/student/studentheader/studentheader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnnouncementComponent } from 'src/app/component/student/announcement/announcement.component';
import { CancellationComponent } from 'src/app/component/student/cancellation/cancellation.component';
import { CertificateComponent } from 'src/app/component/student/certificate/certificate.component';
import { FeedbackforfacultyComponent } from 'src/app/component/student/feedbackforfaculty/feedbackforfaculty.component';
import { HolidaysComponent } from 'src/app/component/student/holidays/holidays.component';
import { NewgrievanceregistrationComponent } from 'src/app/component/student/newgrievanceregistration/newgrievanceregistration.component';
import { PrivacypolicyComponent } from 'src/app/component/student/privacypolicy/privacypolicy.component';
import { TermsconditionComponent } from 'src/app/component/student/termscondition/termscondition.component';
import { ContactusComponent } from 'src/app/component/student/contactus/contactus.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    StudentComponent,
    StudentheaderComponent,
    StudentfooterComponent,
    HolidaysComponent,
    AnnouncementComponent,
    NewgrievanceregistrationComponent,
    CertificateComponent,
    FeedbackforfacultyComponent,
    PrivacypolicyComponent,
    TermsconditionComponent,
    ContactusComponent,
    CancellationComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class StudentModule { }
