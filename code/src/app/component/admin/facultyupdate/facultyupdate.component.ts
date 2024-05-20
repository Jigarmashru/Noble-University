import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApicallService } from 'src/app/service/apicall.service';

@Component({
  selector: 'app-facultyupdate',
  templateUrl: './facultyupdate.component.html',
  styleUrls: ['./facultyupdate.component.scss']
})
export class FacultyupdateComponent {

  _id:any;

  facultydata: any;

  facultyapplication !: FormGroup;

  temp: any;

  constructor(private fb: FormBuilder, private _service: ApicallService, private route: ActivatedRoute, private router:Router) { }

ngOnInit(){
  
  this._id = this.route.snapshot.paramMap.get('id');

  console.log(this._id);

  this._service.getfacultydatabyid(this._id).subscribe({
    next: (result) => {
      this.facultydata = result;
      console.log(this.facultydata);
      this.facultyapplication = this.fb.group({
        name: [this.facultydata.name],
        email: [this.facultydata.email],
        phoneno: [this.facultydata.phoneno],
        department: [this.facultydata.department],
        post: [this.facultydata.post],
        address: [this.facultydata.address],
        adharcardno: [this.facultydata.adharcardno],
        dob: [this.facultydata.dob],
        program: [this.facultydata.program],
        password: [this.facultydata.password],
        city: [this.facultydata.city],
        state: [this.facultydata.state],
        gender: [this.facultydata.gender],
        country: [this.facultydata.country],
        pincode: [this.facultydata.pincode]
      });
    },
    error: (err) => {
      console.log(err);
    }
  });

  
}

submit() {
  let Body = {
    "_id": this._id,
    "id": this._id,

    "name": this.facultyapplication.value.name,
    "email": this.facultyapplication.value.email,
    "pno": this.facultyapplication.value.phoneno,
    "department": this.facultyapplication.value.department,
    "post": this.facultyapplication.value.post,
    "add": this.facultyapplication.value.address,
    "adharno": this.facultyapplication.value.adharcardno,
    "dob": this.facultyapplication.value.dob,
    "program": this.facultyapplication.value.program,
    "psw": this.facultyapplication.value.password,
    "city": this.facultyapplication.value.city,
    "state": this.facultyapplication.value.state,
    "gender": this.facultyapplication.value.gender,
    "country": this.facultyapplication.value.country,
    "pincode": this.facultyapplication.value.pincode
  }
  this._service.updatefaculty(Body).subscribe({
    next: (result) => {
      console.log("Successfully Update : ", result);

      this._service.loginupdate(Body).subscribe({
        next: (result) => {
          console.log("Successfully Update : ", result);
          alert("Successfully Update");
          this.router.navigateByUrl("/admin/main/faculty_data")
        },
        error: (err) => {
          console.log(err);
        }
      });
        
    },
    error: (err) => {
      console.log(err);
    }
  });
  
}

}
