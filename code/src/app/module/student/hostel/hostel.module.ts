import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HostelRoutingModule } from './hostel-routing.module';
import { HostelComponent } from './hostel.component';
import { LeaveapplicationComponent } from 'src/app/component/student/leaveapplication/leaveapplication.component';
import { PermanentleaveComponent } from 'src/app/component/student/permanentleave/permanentleave.component';
import { RoomtransferrequestComponent } from 'src/app/component/student/roomtransferrequest/roomtransferrequest.component';


@NgModule({
  declarations: [
    HostelComponent,
    RoomtransferrequestComponent,
    LeaveapplicationComponent,
    PermanentleaveComponent
  ],
  imports: [
    CommonModule,
    HostelRoutingModule
  ]
})
export class HostelModule { }
