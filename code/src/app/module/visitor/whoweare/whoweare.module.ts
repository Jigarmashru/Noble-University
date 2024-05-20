import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhoweareRoutingModule } from './whoweare-routing.module';
import { WhoweareComponent } from './whoweare.component';
import { AcademicleaderComponent } from 'src/app/component/visitor/academicleader/academicleader.component';
import { InfastructureComponent } from 'src/app/component/visitor/infastructure/infastructure.component';
import { LibraryComponent } from 'src/app/component/visitor/library/library.component';
import { OrganogramComponent } from 'src/app/component/visitor/organogram/organogram.component';
import { OuridentityComponent } from 'src/app/component/visitor/ouridentity/ouridentity.component';
import { VisionarymanagerComponent } from 'src/app/component/visitor/visionarymanager/visionarymanager.component';


@NgModule({
  declarations: [
    WhoweareComponent,
    VisionarymanagerComponent,
    AcademicleaderComponent,
    OuridentityComponent,
    OrganogramComponent,
    LibraryComponent,
    InfastructureComponent
  ],
  imports: [
    CommonModule,
    WhoweareRoutingModule,
  ]
})
export class WhoweareModule { }
