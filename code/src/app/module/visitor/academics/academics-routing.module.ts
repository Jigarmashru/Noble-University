import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from 'src/app/component/error404/error404.component';
import { AcademicoverviewComponent } from 'src/app/component/visitor/academicoverview/academicoverview.component';
import { BestpracticesComponent } from 'src/app/component/visitor/bestpractices/bestpractices.component';
import { ExamcornerComponent } from 'src/app/component/visitor/examcorner/examcorner.component';

const routes: Routes = [
  {
    path:'',redirectTo:'academic_overview',pathMatch:'full'
  },
  {
    path:'academic_overview',component:AcademicoverviewComponent
  },
  {
    path:'best_practices',component:BestpracticesComponent
  },
  {
    path:'exam_corner',component:ExamcornerComponent
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
export class AcademicsRoutingModule { }
