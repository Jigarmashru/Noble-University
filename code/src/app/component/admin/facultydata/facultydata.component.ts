import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApicallService } from 'src/app/service/apicall.service';

@Component({
  selector: 'app-facultydata',
  templateUrl: './facultydata.component.html',
  styleUrls: ['./facultydata.component.scss']
})
export class FacultydataComponent {
  facultydata: any;

  facultyapplication !: FormGroup;

  temp: any;

  constructor(private fb: FormBuilder, private _service: ApicallService) { }

  ngOnInit() {
    this.get();
  }

  get() {

    this._service.getallfaculty().subscribe({
      next: (result) => {
        this.facultydata = result;
      },
      error: (err) => {
        console.log(err);
      }
    });

    this.facultyapplication = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      phoneno: ["", Validators.required],
      department: ["", Validators.required],
      post: ["Faculty", Validators.required],
      address: ["", Validators.required],
      adharcardno: ["", Validators.required],
      dob: ["", Validators.required],
      program: ["", Validators.required],
      password: ["", Validators.required],
      city: ["", Validators.required],
      state: ["", Validators.required],
      gender: ["", Validators.required],
      country: ["", Validators.required],
      pincode: ["", Validators.required]
    });
  }

  submit() {
    let Body = {
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
    this._service.addfaculty(Body).subscribe({
      next: (result) => {
        console.log("Successfully Add : ", result);
        // alert("Successfully Add");
        this.temp = result;

        let data = {
          "name": this.facultyapplication.value.name,
          "mail": this.facultyapplication.value.email,
          "psw": this.facultyapplication.value.password,
          "post": this.facultyapplication.value.post,
          "id": this.temp[0]._id
        }

        this._service.loginadd(data).subscribe({
          next: (result) => {
            console.log("Successfully Add : ", result);
            alert("Successfully Add");
            this.get();
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

  delete(id: any) {

    this._service.deletefaculty(id).subscribe({
      next: (result) => {
        console.log("Successfull Delete...", result);

        this._service.logindelete(id).subscribe({
          next: (result) => {
            console.log("Successfully Delete...",result);
            alert("Successfull Delete...");
            this.get();
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
