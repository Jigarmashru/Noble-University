import { Component } from '@angular/core';
import { ApicallService } from 'src/app/service/apicall.service';

@Component({
  selector: 'app-visitorenrollnow',
  templateUrl: './visitorenrollnow.component.html',
  styleUrls: ['./visitorenrollnow.component.scss']
})
export class VisitorenrollnowComponent {

  enrolldata : any;

  constructor(private _service: ApicallService){}

  ngOnInit(){
    this._service.getallenrollnow().subscribe({
      next: (result) => {
        this.enrolldata = result;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
