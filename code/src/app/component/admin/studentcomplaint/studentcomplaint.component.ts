import { Component } from '@angular/core';
import { ApicallService } from 'src/app/service/apicall.service';

@Component({
  selector: 'app-studentcomplaint',
  templateUrl: './studentcomplaint.component.html',
  styleUrls: ['./studentcomplaint.component.scss']
})
export class StudentcomplaintComponent {

  complaint : any;

  constructor(private _service: ApicallService){}

  ngOnInit(){
    this.getlist();
  }

  getlist(){
    this._service.getallcomplaint().subscribe({
      next: (result) => {
        this.complaint = result;
      },
      error: (err) => {
        console.log(err);
      }
    });
   }

  delete(_id:any){

    this._service.deletecomplaint(_id).subscribe({
      next: (result) => {
        console.log("Successfull Delete...",result);
        alert("Successfull Delete...");
        this.getlist();
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

}
