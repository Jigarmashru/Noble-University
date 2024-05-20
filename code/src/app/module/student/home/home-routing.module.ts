import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileModule } from '../profile/profile.module';
import { DashboardComponent } from 'src/app/component/student/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'',redirectTo:'dashboard',pathMatch:'full'
  },
  {
    path:'dashboard',component : DashboardComponent
  },
  {
    path:'profile',loadChildren : () => ProfileModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
