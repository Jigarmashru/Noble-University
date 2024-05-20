import { Component } from '@angular/core';
import { ApicallService } from 'src/app/service/apicall.service';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss']
})
export class HolidaysComponent {
  
  holiday : any;

  constructor(private _service: ApicallService){}

  ngOnInit(){
    this._service.getallholiday().subscribe({
      next: (result) => {
        this.holiday = result;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
