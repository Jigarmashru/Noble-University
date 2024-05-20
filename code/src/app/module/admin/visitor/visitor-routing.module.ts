import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitorcareerComponent } from 'src/app/component/admin/visitorcareer/visitorcareer.component';
import { VisitorcontactusComponent } from 'src/app/component/admin/visitorcontactus/visitorcontactus.component';
import { VisitorenrollnowComponent } from 'src/app/component/admin/visitorenrollnow/visitorenrollnow.component';

const routes: Routes = [
  {
    path:'',redirectTo:'visitor_career',pathMatch:'full'
  },
  {
    path:'visitor_career',component : VisitorcareerComponent
  },
  {
    path:'visitor_contact_us',component: VisitorcontactusComponent
  },
  {
    path:'visitor_enroll_now',component: VisitorenrollnowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule { }
