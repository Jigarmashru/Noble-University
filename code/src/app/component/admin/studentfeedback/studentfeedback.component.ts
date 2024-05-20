import { Component } from '@angular/core';
import { ApicallService } from 'src/app/service/apicall.service';

@Component({
  selector: 'app-studentfeedback',
  templateUrl: './studentfeedback.component.html',
  styleUrls: ['./studentfeedback.component.scss']
})
export class StudentfeedbackComponent {

  feedback : any;

  constructor(private _service: ApicallService){}

  ngOnInit(){
    this.getlist();
  }

  getlist(){
    this._service.getallfeedback().subscribe({
      next: (result) => {
        this.feedback = result;
      },
      error: (err) => {
        console.log(err);
      }
    });
   }

  delete(_id:any){

    this._service.deletefeedback(_id).subscribe({
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
