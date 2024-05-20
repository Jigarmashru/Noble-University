import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApicallService } from 'src/app/service/apicall.service';

@Component({
  selector: 'app-feedbackforfaculty',
  templateUrl: './feedbackforfaculty.component.html',
  styleUrls: ['./feedbackforfaculty.component.scss']
})
export class FeedbackforfacultyComponent {
  
  feedbackdata : any;
  
  feedbackapplication !: FormGroup;

  constructor(private fb : FormBuilder,private _service: ApicallService){}

  ngOnInit(){
    let data:any = localStorage.getItem('studentdata');
    data = JSON.parse(data)

    this._service.getfeedbackdatabyid(data.enrollmentno).subscribe({
      next: (result) => {
        this.feedbackdata = result;
      },
      error: (err) => {
        console.log(err);
      }
    });

    this.feedbackapplication = this.fb.group({
      name:[data.name],
      eno:[data.enrollmentno],
      pro:[data.program],
      department:[data.department],
      sem:[data.semester],
      pno:[data.studentpno,Validators.required],
      mail:[data.email,[Validators.required,Validators.email]],
      fname:['',Validators.required],
      subname:['',Validators.required],
      feedback:['',Validators.required]
    });
  }

  submit(){
    console.log(this.feedbackapplication.value);
    let Body = {
      "name": this.feedbackapplication.value.name,
      "enrollno": this.feedbackapplication.value.eno,
      "fname": this.feedbackapplication.value.fname,
      "subname": this.feedbackapplication.value.subname,
      "feedback": this.feedbackapplication.value.feedback
    }
    this._service.applyfeedback(Body).subscribe({
      next: (result) => {
        console.log("Successfully Add : ",result);
        alert("Successfully Apply");
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
