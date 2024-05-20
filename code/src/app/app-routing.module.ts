import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './component/error404/error404.component';
import { VisitorModule } from './module/visitor/visitor.module';
import { StudentModule } from './module/student/student.module';
import { LoginComponent } from './component/login/login.component';
import { FacultyModule } from './module/faculty/faculty.module';
import { AdminModule } from './module/admin/admin.module';

const routes: Routes = [
  {
    path:'',redirectTo:'visitor',pathMatch:'full'
  },
  {
    path:'visitor',loadChildren:() => VisitorModule
  },
  {
    path:'student',loadChildren:() => StudentModule
  },
  {
    path:'faculty',loadChildren:() => FacultyModule
  },
  {
    path:'admin',loadChildren:() => AdminModule
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'error',component:Error404Component
  },
  {
    path:'**',redirectTo:'error',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
