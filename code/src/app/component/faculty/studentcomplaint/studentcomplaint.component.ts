import { Component } from '@angular/core';
import { ApicallService } from 'src/app/service/apicall.service';

@Component({
  selector: 'app-studentcomplaint',
  templateUrl: './studentcomplaint.component.html',
  styleUrls: ['./studentcomplaint.component.scss']
})
export class StudentcomplaintComponent {

  constructor(private _service: ApicallService){}

  complaintdata : any;

  ngOnInit(){

    this._service.getallcomplaint().subscribe({
      next : (result) => {
        this.complaintdata = result;
      },
      error : (err) => {
        console.log(err);
      }
    });

  }

}
