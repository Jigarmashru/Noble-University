import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from 'src/app/component/error404/error404.component';
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

const routes: Routes = [
  {
    path:'',redirectTo:'explore_our_programs',pathMatch:'full'
  },
  {
    path:'explore_our_programs',component:ExploreourprogramsComponent
  },
  {
    path:'faculty_of_ayurveda',component:FacultyofayurvedaComponent
  },
  {
    path:'faculty_of_homeopathy',component:FacultyofhomeopathyComponent
  },
  {
    path:'faculty_of_nursing',component:FacultyofnursingComponent
  },
  {
    path:'faculty_of_pharmacy',component:FacultyofpharmacyComponent
  },
  {
    path:'faculty_of_engineering',component:FacultyofengineeringComponent
  },
  {
    path:'faculty_of_science',component:FacultyofscienceComponent
  },
  {
    path:'faculty_of_management_commerce',component:FacultyofmanagementComponent
  },
  {
    path:'faculty_of_computer_applcation',component:FacultyofcomputerapplicationComponent
  },
  {
    path:'faculty_of_education',component:FacultyofeducationComponent
  },
  {
    path:'faculty_of_arts',component:FacultyofartsComponent
  },
  {
    path:'faculty_of_liabrary_science',component:FacultyofliabraryscienceComponent
  },
  // {
  //   path:'faculty_of_doctorate_research',component:FacultyofdoctorateresearchComponent
  // },
  {
    path:'vocational_studies',component:VocationalstudiesComponent
  },
  {
    path:'error',component:Error404Component
  },
  {
    path:'**',redirectTo:'error',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
