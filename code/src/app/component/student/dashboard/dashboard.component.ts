import { Component } from '@angular/core';
import { ApicallService } from 'src/app/service/apicall.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  announcement : any;
  attendence : any = 0.00;

  constructor(private _service : ApicallService){}

  ngOnInit(){

    let data : any = localStorage.getItem('studentdata');
    data = JSON.parse(data);

    this.attendence = data.attendence;

    this._service.getallannouncement().subscribe({
      next: (result) => {
        console.log(result);
        this.announcement = result;
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

}
