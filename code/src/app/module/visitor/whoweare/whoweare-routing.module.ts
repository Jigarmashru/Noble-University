import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from 'src/app/component/error404/error404.component';
import { AcademicleaderComponent } from 'src/app/component/visitor/academicleader/academicleader.component';
import { InfastructureComponent } from 'src/app/component/visitor/infastructure/infastructure.component';
import { LibraryComponent } from 'src/app/component/visitor/library/library.component';
import { OrganogramComponent } from 'src/app/component/visitor/organogram/organogram.component';
import { OuridentityComponent } from 'src/app/component/visitor/ouridentity/ouridentity.component';
import { VisionarymanagerComponent } from 'src/app/component/visitor/visionarymanager/visionarymanager.component';

const routes: Routes = [
  {
    path:'',redirectTo:'visionary_management',pathMatch:'full'
  },
  {
    path:'visionary_management',component:VisionarymanagerComponent
  },
  {
    path:'academic_leader',component:AcademicleaderComponent
  },
  {
    path:'our_identity',component:OuridentityComponent
  },
  {
    path:'organogram',component:OrganogramComponent
  },
  {
    path:'library',component:LibraryComponent
  },
  {
    path:'infrastructure',component:InfastructureComponent
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
export class WhoweareRoutingModule { }
