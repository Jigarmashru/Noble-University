import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from 'src/app/component/error404/error404.component';
import { AdmissionofficesComponent } from 'src/app/component/visitor/admissionoffices/admissionoffices.component';
import { HowtoapplyComponent } from 'src/app/component/visitor/howtoapply/howtoapply.component';
import { NuadvantagesComponent } from 'src/app/component/visitor/nuadvantages/nuadvantages.component';
import { PayfeesonlineComponent } from 'src/app/component/visitor/payfeesonline/payfeesonline.component';
import { ScholarshipComponent } from 'src/app/component/visitor/scholarship/scholarship.component';
import { WhystudyatnobleuniversityComponent } from 'src/app/component/visitor/whystudyatnobleuniversity/whystudyatnobleuniversity.component';

const routes: Routes = [
  {
    path:'',redirectTo:'why_study_at_noble_university',pathMatch:'full'
  },
  {
    path:'why_study_at_noble_university',component:WhystudyatnobleuniversityComponent
  },
  {
    path:'how_to_apply',component:HowtoapplyComponent
  },
  {
    path:'scholarship',component:ScholarshipComponent
  },
  {
    path:'nu_advantages',component:NuadvantagesComponent
  },
  {
    path:'admission_offices',component:AdmissionofficesComponent
  },
  {
    path:'pay_fees_online',component:PayfeesonlineComponent
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
export class AdmissionsRoutingModule { }
