import { Component } from '@angular/core';
import { ApicallService } from 'src/app/service/apicall.service';

@Component({
  selector: 'app-visitorcareer',
  templateUrl: './visitorcareer.component.html',
  styleUrls: ['./visitorcareer.component.scss']
})
export class VisitorcareerComponent {

  career : any;

  constructor(private _service: ApicallService){}

  ngOnInit(){
    this._service.getallcareer().subscribe({
      next: (result) => {
        this.career = result;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
