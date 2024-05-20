import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitiativeRoutingModule } from './initiative-routing.module';
import { InitiativeComponent } from './initiative.component';
import { EDCComponent } from 'src/app/component/visitor/edc/edc.component';
import { NSICComponent } from 'src/app/component/visitor/nsic/nsic.component';


@NgModule({
  declarations: [
    InitiativeComponent,
    EDCComponent,
    NSICComponent
  ],
  imports: [
    CommonModule,
    InitiativeRoutingModule
  ]
})
export class InitiativeModule { }
