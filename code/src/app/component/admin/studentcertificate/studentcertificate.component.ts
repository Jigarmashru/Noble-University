import { Component } from '@angular/core';
import { ApicallService } from 'src/app/service/apicall.service';

@Component({
  selector: 'app-studentcertificate',
  templateUrl: './studentcertificate.component.html',
  styleUrls: ['./studentcertificate.component.scss']
})
export class StudentcertificateComponent {

  certificate : any;

  constructor(private _service: ApicallService){}

  ngOnInit(){
    this.getlist();
  }

  getlist(){
    this._service.getallcertificate().subscribe({
      next: (result) => {
        this.certificate = result;
      },
      error: (err) => {
        console.log(err);
      }
    });
   }

  delete(_id:any){

    this._service.deletecertificate(_id).subscribe({
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
