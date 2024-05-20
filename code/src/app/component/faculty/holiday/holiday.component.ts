import { Component } from '@angular/core';
import { ApicallService } from 'src/app/service/apicall.service';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.scss']
})
export class HolidayComponent {

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
