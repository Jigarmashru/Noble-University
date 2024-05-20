import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApicallService } from 'src/app/service/apicall.service';

@Component({
  selector: 'app-addleaveapplication',
  templateUrl: './addleaveapplication.component.html',
  styleUrls: ['./addleaveapplication.component.scss']
})
export class AddleaveapplicationComponent {
  kindofleavemenu = [
    'Clinical Leave',
    'Event Participation Leave',
    'Festival Leave',
    'Field Work Leave',
    'Medical Leave',
    'Social Leave'
  ]

  leavetypemenu = [
    'Full Day',
    'Partially'
  ]

  leavedata : any;

  leaveapplication !: FormGroup;

  constructor(private fb : FormBuilder,private _service: ApicallService){}

  ngOnInit(){
    let data:any = localStorage.getItem('studentdata');
    data = JSON.parse(data)

    this._service.getleavedatabyid(data.enrollmentno).subscribe({
      next: (result) => {
        this.leavedata = result;
      },
      error: (err) => {
        console.log(err);
      }
    });

    this.leaveapplication = this.fb.group({
      name:[data.name],
      eno:[data.enrollmentno],
      pro:[data.program],
      department:[data.department],
      sem:[data.semester],
      pno:[data.studentpno,Validators.required],
      mail:[data.email,[Validators.required,Validators.email]],
      remarks:['',Validators.required],
      kindofleave:['',Validators.required],
      leavetype:['',Validators.required],
      fromdate:['',Validators.required],
      todate:['',Validators.required]
    });
  }

  submit(){
    console.log(this.leaveapplication.value);
    let Body = {
      "name": this.leaveapplication.value.name,
      "enrollno": this.leaveapplication.value.eno,
      "remarks": this.leaveapplication.value.remarks,
      "kindofleave": this.leaveapplication.value.kindofleave,
      "leavetype": this.leaveapplication.value.leavetype,
      "fromdate": this.leaveapplication.value.fromdate,
      "todate": this.leaveapplication.value.todate
    }
    this._service.applyleave(Body).subscribe({
      next: (result) => {
        console.log("Successfully Add : ",result);
        alert("Successfully Add");
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
