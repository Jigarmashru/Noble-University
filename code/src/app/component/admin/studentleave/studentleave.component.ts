import { Component } from '@angular/core';
import { ApicallService } from 'src/app/service/apicall.service';

@Component({
  selector: 'app-studentleave',
  templateUrl: './studentleave.component.html',
  styleUrls: ['./studentleave.component.scss']
})
export class StudentleaveComponent {

  leave : any;

  constructor(private _service: ApicallService){}

  ngOnInit(){
    this.getlist();
  }

  getlist(){
    this._service.getallleave().subscribe({
      next: (result) => {
        this.leave = result;
      },
      error: (err) => {
        console.log(err);
      }
    });
   }

  delete(_id:any){

    this._service.deleteleave(_id).subscribe({
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
