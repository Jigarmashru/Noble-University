import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/service/apicall.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {

  constructor(private _service: ApicallService,private router : Router){}

  ngOnInit(){

    // direct not used router link
    let data:any = localStorage.getItem('logindata');
    data = JSON.parse(data)

    if(!data){
      this.router.navigateByUrl('/visitor');
    }else{
      if(data.post === "Student"){
        this.router.navigateByUrl('/student');
      }
      else{
        this.router.navigateByUrl('/visitor');
      }
    }


    // student data get and store in local storage

    this._service.getstudentdatabyid(data.id).subscribe({
      next: (result) => {
        localStorage.setItem("studentdata",JSON.stringify(result));
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

}
