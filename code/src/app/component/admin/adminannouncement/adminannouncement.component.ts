import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApicallService } from 'src/app/service/apicall.service';

@Component({
  selector: 'app-adminannouncement',
  templateUrl: './adminannouncement.component.html',
  styleUrls: ['./adminannouncement.component.scss']
})
export class AdminannouncementComponent {
  announcementdata : any; 
  
  announcementapplication !: FormGroup;

  constructor(private fb : FormBuilder,private _service: ApicallService){}

  ngOnInit(){
    this.get();
  }

  get(){

    this._service.getallannouncement().subscribe({
      next: (result) => {
        this.announcementdata = result;
      },
      error: (err) => {
        console.log(err);
      }
    });

    this.announcementapplication = this.fb.group({
      title:["",Validators.required],
      message:["",Validators.required],
      date:["",Validators.required]
    });
  }

  submit(){
    console.log(this.announcementapplication.value);
    let Body = {
      "title": this.announcementapplication.value.title,
      "message": this.announcementapplication.value.message,
      "date": this.announcementapplication.value.date
    }
    this._service.addannouncement(Body).subscribe({
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

    this._service.deleteannouncement(id).subscribe({
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
