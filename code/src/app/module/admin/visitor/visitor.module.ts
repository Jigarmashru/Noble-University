import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorRoutingModule } from './visitor-routing.module';
import { VisitorComponent } from './visitor.component';
import { VisitorcontactusComponent } from 'src/app/component/admin/visitorcontactus/visitorcontactus.component';
import { VisitorenrollnowComponent } from 'src/app/component/admin/visitorenrollnow/visitorenrollnow.component';
import { VisitorcareerComponent } from 'src/app/component/admin/visitorcareer/visitorcareer.component';


@NgModule({
  declarations: [
    VisitorComponent,
    VisitorcareerComponent,
    VisitorcontactusComponent,
    VisitorenrollnowComponent
  ],
  imports: [
    CommonModule,
    VisitorRoutingModule
  ]
})
export class VisitorModule { }
