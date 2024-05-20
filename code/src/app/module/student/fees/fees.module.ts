import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeesRoutingModule } from './fees-routing.module';
import { FeesComponent } from './fees.component';
import { AllpayfeesComponent } from 'src/app/component/student/allpayfees/allpayfees.component';


@NgModule({
  declarations: [
    FeesComponent,
    AllpayfeesComponent
  ],
  imports: [
    CommonModule,
    FeesRoutingModule
  ]
})
export class FeesModule { }
