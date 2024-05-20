import { Component } from '@angular/core';
import { ApicallService } from 'src/app/service/apicall.service';

@Component({
  selector: 'app-visitorcontactus',
  templateUrl: './visitorcontactus.component.html',
  styleUrls: ['./visitorcontactus.component.scss']
})
export class VisitorcontactusComponent {

  contactus : any;

  constructor(private _service: ApicallService){}

  ngOnInit(){
    this._service.getallcontactus().subscribe({
      next: (result) => {
        this.contactus = result;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
