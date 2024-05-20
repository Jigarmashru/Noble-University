import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/service/apicall.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {


  constructor(private _service: ApicallService,private router : Router){}

  ngOnInit(){

    // direct not used router link
    let data:any = localStorage.getItem('logindata');
    data = JSON.parse(data)

    if(!data){
      this.router.navigateByUrl('/visitor');
    }else{
      if(data.post === "Admin"){
        this.router.navigateByUrl('/admin');
      }
      else{
        this.router.navigateByUrl('/visitor');
      }
    }


    // admin data get and store in local storage

    this._service.getfacultydatabyid(data.id).subscribe({
      next: (result) => {
        localStorage.setItem("admindata",JSON.stringify(result));
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

}
