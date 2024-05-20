import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/service/apicall.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  facultydata !: FormGroup;

  constructor(private _service: ApicallService, private fb: FormBuilder,private router: Router) { }

  faculty: any;

  ngOnInit() {

    let data : any = localStorage.getItem('facultydata');
    data = JSON.parse(data);

    this._service.getfacultydatabyid(data.id).subscribe({
      next: (result) => {
        this.faculty = result;
        
        this.facultydata = this.fb.group({
          name: [this.faculty.name],
          email: [this.faculty.email],
          phoneno: [this.faculty.phoneno],
          department: [this.faculty.department],
          post: [this.faculty.post],
          address: [this.faculty.address],
          adharcardno: [this.faculty.adharcardno],
          dob: [this.faculty.dob],
          program: [this.faculty.program],
          password: [this.faculty.password],
          city: [this.faculty.city],
          state: [this.faculty.state],
          gender: [this.faculty.gender],
          country: [this.faculty.country],
          pincode: [this.faculty.pincode]

        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  psw(){

    this.router.navigateByUrl('faculty/main/faculty_password_change');

  }

}
