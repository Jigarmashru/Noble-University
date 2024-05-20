import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumniComponent } from 'src/app/component/visitor/alumni/alumni.component';
import { CareerComponent } from 'src/app/component/visitor/career/career.component';
import { ContactusComponent } from 'src/app/component/visitor/contactus/contactus.component';
import { EnrollnowComponent } from 'src/app/component/visitor/enrollnow/enrollnow.component';
import { HomeComponent } from 'src/app/component/visitor/home/home.component';
import { TrainingplacementcellComponent } from 'src/app/component/visitor/trainingplacementcell/trainingplacementcell.component';
import { AcademicsModule } from './academics/academics.module';
import { AdmissionsModule } from './admissions/admissions.module';
import { CourseModule } from './course/course.module';
import { InitiativeModule } from './initiative/initiative.module';
import { WhoweareModule } from './whoweare/whoweare.module';
import { VisitorComponent } from './visitor.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'main', pathMatch: 'full'
  },
  {
    path: 'main', component: VisitorComponent, children: [
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'who_we_are', loadChildren: () => WhoweareModule
      },
      {
        path: 'admission', loadChildren: () => AdmissionsModule
      },
      {
        path: 'course', loadChildren: () => CourseModule
      },
      {
        path: 'academic', loadChildren: () => AcademicsModule
      },
      {
        path: 'initiative', loadChildren: () => InitiativeModule
      },
      {
        path: 'training_placement_cell', component: TrainingplacementcellComponent
      },
      {
        path: 'alumni', component: AlumniComponent
      },
      {
        path: 'career', component: CareerComponent
      },
      {
        path: 'contact_us', component: ContactusComponent
      },
      {
        path: 'enrollnow', component: EnrollnowComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule { }
