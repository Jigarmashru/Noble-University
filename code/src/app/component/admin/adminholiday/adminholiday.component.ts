import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApicallService } from 'src/app/service/apicall.service';

@Component({
  selector: 'app-adminholiday',
  templateUrl: './adminholiday.component.html',
  styleUrls: ['./adminholiday.component.scss']
})
export class AdminholidayComponent {
  holidaydata : any; 
  
  holidayapplication !: FormGroup;

  constructor(private fb : FormBuilder,private _service: ApicallService){}

  ngOnInit(){
    this.get();
  }

  get(){

    this._service.getallholiday().subscribe({
      next: (result) => {
        this.holidaydata = result;
      },
      error: (err) => {
        console.log(err);
      }
    });

    this.holidayapplication = this.fb.group({
      name:["",Validators.required],
      fromdate:["",Validators.required],
      todate:["",Validators.required],
      description:["",Validators.required]
    });
  }

  submit(){
    console.log(this.holidayapplication.value);
    let Body = {
      "name": this.holidayapplication.value.name,
      "fromdate": this.holidayapplication.value.fromdate,
      "todate": this.holidayapplication.value.todate,
      "description": this.holidayapplication.value.description
    }
    this._service.addholiday(Body).subscribe({
      next: (result) => {
        console.log("Successfully Add : ",result);
        alert("Successfully Add");
        this.get();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  delete(id:any){

    this._service.deleteholiday(id).subscribe({
      next: (result) => {
        console.log("Successfull Delete...",result);
        alert("Successfull Delete...");
        this.get();
      },
      error: (err) => {
        console.log(err);
      }
    });

  }
}
