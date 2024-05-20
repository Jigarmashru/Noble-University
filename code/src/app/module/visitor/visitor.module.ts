import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorRoutingModule } from './visitor-routing.module';
import { VisitorComponent } from './visitor.component';
import { AlumniComponent } from 'src/app/component/visitor/alumni/alumni.component';
import { CareerComponent } from 'src/app/component/visitor/career/career.component';
import { ContactusComponent } from 'src/app/component/visitor/contactus/contactus.component';
import { EnrollnowComponent } from 'src/app/component/visitor/enrollnow/enrollnow.component';
import { FooterComponent } from 'src/app/component/visitor/footer/footer.component';
import { HeaderComponent } from 'src/app/component/visitor/header/header.component';
import { HomeComponent } from 'src/app/component/visitor/home/home.component';
import { TrainingplacementcellComponent } from 'src/app/component/visitor/trainingplacementcell/trainingplacementcell.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    VisitorComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TrainingplacementcellComponent,
    AlumniComponent,
    CareerComponent,
    ContactusComponent,
    EnrollnowComponent
  ],
  imports: [
    CommonModule,
    VisitorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class VisitorModule { }
