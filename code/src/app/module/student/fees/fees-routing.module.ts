import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllpayfeesComponent } from 'src/app/component/student/allpayfees/allpayfees.component';

const routes: Routes = [
  {
    path:'',redirectTo:'all_pay_fees',pathMatch:'full'
  },
  {
    path:'all_pay_fees',component : AllpayfeesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeesRoutingModule { }
