import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveapplicationComponent } from 'src/app/component/student/leaveapplication/leaveapplication.component';
import { PermanentleaveComponent } from 'src/app/component/student/permanentleave/permanentleave.component';
import { RoomtransferrequestComponent } from 'src/app/component/student/roomtransferrequest/roomtransferrequest.component';

const routes: Routes = [
  {
    path:'',redirectTo:'room_transfer_request',pathMatch:'full'
  },
  {
    path:'room_transfer_request',component : RoomtransferrequestComponent
  },
  {
    path:'leave_application',component : LeaveapplicationComponent
  },
  {
    path:'permanent_leave',component : PermanentleaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostelRoutingModule { }
