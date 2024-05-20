import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HallticketComponent } from 'src/app/component/student/hallticket/hallticket.component';
import { ResultComponent } from 'src/app/component/student/result/result.component';

const routes: Routes = [
  {
    path:'',redirectTo:'hall_ticket',pathMatch:'full'
  },
  {
    path:'hall_ticket',component : HallticketComponent
  },
  {
    path:'result',component : ResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamRoutingModule { }
