import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from 'src/app/component/error404/error404.component';
import { EDCComponent } from 'src/app/component/visitor/edc/edc.component';
import { NSICComponent } from 'src/app/component/visitor/nsic/nsic.component';

const routes: Routes = [
  {
    path:'',redirectTo:'edc',pathMatch:'full'
  },
  {
    path:'edc',component:EDCComponent
  },
  {
    path:'nsic',component:NSICComponent
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
export class InitiativeRoutingModule { }
