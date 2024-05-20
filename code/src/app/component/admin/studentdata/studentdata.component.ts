import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApicallService } from 'src/app/service/apicall.service';

@Component({
  selector: 'app-studentdata',
  templateUrl: './studentdata.component.html',
  styleUrls: ['./studentdata.component.scss']
})
export class StudentdataComponent {

  studentdata: any;

  studentapplication !: FormGroup;

  temp: any;

  constructor(private fb: FormBuilder, private _service: ApicallService) { }

  ngOnInit() {
    this.get();
  }

  get() {

    this._service.getallstudent().subscribe({
      next: (result) => {
        this.studentdata = result;
      },
      error: (err) => {
        console.log(err);
      }
    });

    this.studentapplication = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      studentpno: ["", Validators.required],
      department: ["", Validators.required],
      post: ["Student", Validators.required],
      permananentadd: ["", Validators.required],
      presentadd: ["", Validators.required],
      adharcardno: ["", Validators.required],
      dob: ["", Validators.required],
      program: ["", Validators.required],
      password: ["", Validators.required],
      city: ["", Validators.required],
      state: ["", Validators.required],
      gender: ["", Validators.required],
      country: ["", Validators.required],
      pincode: ["", Validators.required],
      semester: ["", Validators.required],
      attendence: ["", Validators.required],
      birthplace: ["", Validators.required],
      fatherdesignation: ["", Validators.required],
      mothername: ["", Validators.required],
      motherpno: ["", Validators.required],
      hobbies: ["", Validators.required],
      bloodgroup: ["", Validators.required],
      fatherpno: ["", Validators.required],
      rno: ["", Validators.required],
      fathername: ["", Validators.required],
      category: ["", Validators.required],
      faculty: ["", Validators.required],
      admissionno: ["", Validators.required],
      enrollmentno: ["", Validators.required],
      admissionyear: ["", Validators.required],
      admissiontype: ["", Validators.required]
    });
  }

  submit() {
    let Body = {
      "name": this.studentapplication.value.name,
      "mail": this.studentapplication.value.email,
      "spno": this.studentapplication.value.studentpno,
      "department": this.studentapplication.value.department,
      "post": this.studentapplication.value.post,
      "permananentadd": this.studentapplication.value.permananentadd,
      "presentadd": this.studentapplication.value.presentadd,
      "adharno": this.studentapplication.value.adharcardno,
      "dob": this.studentapplication.value.dob,
      "program": this.studentapplication.value.program,
      "psw": this.studentapplication.value.password,
      "city": this.studentapplication.value.city,
      "state": this.studentapplication.value.state,
      "gender": this.studentapplication.value.gender,
      "country": this.studentapplication.value.country,
      "pincode": this.studentapplication.value.pincode,
      "sem": this.studentapplication.value.semester,
      "attendence": this.studentapplication.value.attendence,
      "bplace": this.studentapplication.value.birthplace,
      "fdesignation": this.studentapplication.value.fatherdesignation,
      "mname": this.studentapplication.value.mothername,
      "mpno": this.studentapplication.value.motherpno,
      "hobby": this.studentapplication.value.hobbies,
      "bloodgroup": this.studentapplication.value.bloodgroup,
      "fpno": this.studentapplication.value.fatherpno,
      "rno": this.studentapplication.value.rno,
      "fname": this.studentapplication.value.fathername,
      "category": this.studentapplication.value.category,
      "faculty": this.studentapplication.value.faculty,
      "admissionno": this.studentapplication.value.admissionno,
      "enrollno": this.studentapplication.value.enrollmentno,
      "ayear": this.studentapplication.value.admissionyear,
      "atype": this.studentapplication.value.admissiontype,
    }
    this._service.addstudent(Body).subscribe({
      next: (result) => {
        console.log("Successfully Add : ", result);
        this.temp = result;

        let data = {
          "name": this.studentapplication.value.name,
          "mail": this.studentapplication.value.email,
          "psw": this.studentapplication.value.password,
          "post": this.studentapplication.value.post,
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

    this._service.deletestudent(id).subscribe({
      next: (result) => {
        console.log("Successfull Delete...", result);

        this._service.logindelete(id).subscribe({
          next: (result) => {
            console.log("Successfully Delete...",result);
            alert("Successfully Delete...");
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
