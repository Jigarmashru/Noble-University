import { Component } from '@angular/core';
import { ApicallService } from 'src/app/service/apicall.service';

@Component({
  selector: 'app-studentleave',
  templateUrl: './studentleave.component.html',
  styleUrls: ['./studentleave.component.scss']
})
export class StudentleaveComponent {
  
  constructor(private _service: ApicallService){}

  leavedata : any;

  ngOnInit(){

    this._service.getallleave().subscribe({
      next : (result) => {
        this.leavedata = result;
      },
      error : (err) => {
        console.log(err);
      }
    });

  }

}
