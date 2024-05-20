import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/service/apicall.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent {

  constructor(private _service: ApicallService,private router : Router){}

  ngOnInit(){

    // direct not used router link
    let data:any = localStorage.getItem('logindata');
    data = JSON.parse(data)

    if(!data){
      this.router.navigateByUrl('/visitor');
    }else{
      if(data.post === "Faculty"){
        this.router.navigateByUrl('/faculty');
      }
      else{
        this.router.navigateByUrl('/visitor');
      }
    }


    // faculty data get and store in local storage

    this._service.getfacultydatabyid(data.id).subscribe({
      next: (result) => {
        localStorage.setItem("facultydata",JSON.stringify(result));
      },
      error: (err) => {
        console.log(err);
      }
    });

  }
  
}
