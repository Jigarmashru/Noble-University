import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionsRoutingModule } from './admissions-routing.module';
import { AdmissionsComponent } from './admissions.component';
import { HowtoapplyComponent } from 'src/app/component/visitor/howtoapply/howtoapply.component';
import { NuadvantagesComponent } from 'src/app/component/visitor/nuadvantages/nuadvantages.component';
import { PayfeesonlineComponent } from 'src/app/component/visitor/payfeesonline/payfeesonline.component';
import { ScholarshipComponent } from 'src/app/component/visitor/scholarship/scholarship.component';
import { WhystudyatnobleuniversityComponent } from 'src/app/component/visitor/whystudyatnobleuniversity/whystudyatnobleuniversity.component';
import { AdmissionofficesComponent } from 'src/app/component/visitor/admissionoffices/admissionoffices.component';


@NgModule({
  declarations: [
    AdmissionsComponent,
    WhystudyatnobleuniversityComponent,
    HowtoapplyComponent,
    ScholarshipComponent,
    NuadvantagesComponent,
    AdmissionofficesComponent,
    PayfeesonlineComponent
  ],
  imports: [
    CommonModule,
    AdmissionsRoutingModule
  ]
})
export class AdmissionsModule { }
