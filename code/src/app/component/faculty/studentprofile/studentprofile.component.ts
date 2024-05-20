import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/service/apicall.service';

@Component({
  selector: 'app-studentprofile',
  templateUrl: './studentprofile.component.html',
  styleUrls: ['./studentprofile.component.scss']
})
export class StudentprofileComponent {
  
  studentdata : any;

  constructor(private _service: ApicallService,private router: Router){}

  ngOnInit(){
    this._service.getallstudent().subscribe({
      next: (result) => {
        this.studentdata = result;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  update(id:any){
    
    this.router.navigateByUrl(`/faculty/main/student_update/${id}`);

  }

}
