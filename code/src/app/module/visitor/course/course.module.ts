import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course.component';
import { ExploreourprogramsComponent } from 'src/app/component/visitor/exploreourprograms/exploreourprograms.component';
import { FacultyofartsComponent } from 'src/app/component/visitor/facultyofarts/facultyofarts.component';
import { FacultyofayurvedaComponent } from 'src/app/component/visitor/facultyofayurveda/facultyofayurveda.component';
import { FacultyofcomputerapplicationComponent } from 'src/app/component/visitor/facultyofcomputerapplication/facultyofcomputerapplication.component';
import { FacultyofeducationComponent } from 'src/app/component/visitor/facultyofeducation/facultyofeducation.component';
import { FacultyofengineeringComponent } from 'src/app/component/visitor/facultyofengineering/facultyofengineering.component';
import { FacultyofhomeopathyComponent } from 'src/app/component/visitor/facultyofhomeopathy/facultyofhomeopathy.component';
import { FacultyofliabraryscienceComponent } from 'src/app/component/visitor/facultyofliabraryscience/facultyofliabraryscience.component';
import { FacultyofmanagementComponent } from 'src/app/component/visitor/facultyofmanagement/facultyofmanagement.component';
import { FacultyofnursingComponent } from 'src/app/component/visitor/facultyofnursing/facultyofnursing.component';
import { FacultyofpharmacyComponent } from 'src/app/component/visitor/facultyofpharmacy/facultyofpharmacy.component';
import { FacultyofscienceComponent } from 'src/app/component/visitor/facultyofscience/facultyofscience.component';
import { VocationalstudiesComponent } from 'src/app/component/visitor/vocationalstudies/vocationalstudies.component';


@NgModule({
  declarations: [
    CourseComponent,
    FacultyofayurvedaComponent,
    FacultyofhomeopathyComponent,
    FacultyofnursingComponent,
    FacultyofpharmacyComponent,
    FacultyofengineeringComponent,
    FacultyofscienceComponent,
    FacultyofmanagementComponent,
    FacultyofcomputerapplicationComponent,
    FacultyofeducationComponent,
    FacultyofartsComponent,
    FacultyofliabraryscienceComponent,
    VocationalstudiesComponent,
    ExploreourprogramsComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
