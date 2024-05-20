import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApicallService } from 'src/app/service/apicall.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent {
  
  prefix: any = [
    'Dr.',
    'Mr.',
    'Mrs.',
    'Miss'
  ]
  post: any = [
    'Assistant',
    'Associate',
    'Professor',
    'Lecturer'
  ]
  department: any = [
    'Engineering',
    'Ayurvedic',
    'Homeopathy',
    'Management',
    'Computer Application',
    'Pharmacy',
    'Science',
    'Nursing',
    'Education'
  ]
  faculty: any = [
    'Faculty',
    'Non Teaching'
  ]

  careerform!: FormGroup;

  constructor(private fb: FormBuilder,private _service: ApicallService){}

  ngOnInit(){
    this.careerform = this.fb.group({
      prefix: ['',Validators.required],
      firstname: ['', Validators.required],
      middlename: ['', Validators.required],
      lastname: ['', Validators.required],
      pno: ['', Validators.required],
      email: ['', Validators.required],
      applyforpost: ['',Validators.required],
      applyforfacultyof: ['',Validators.required],
      applyingfor: ['',Validators.required],
      file: ['',Validators.required]
    });
  }

  submit(){
    let Body = {
      "prefix": this.careerform.value.prefix,
      "fnm": this.careerform.value.firstname,
      "mnm": this.careerform.value.middlename,
      "lnm": this.careerform.value.lastname,
      "pno": this.careerform.value.pno,
      "email": this.careerform.value.email,
      "applyforpost": this.careerform.value.applyforpost,
      "applyforfacultyof": this.careerform.value.applyforfacultyof,
      "applyingfor": this.careerform.value.applyingfor,
      "file": this.careerform.value.file
    }
    this._service.applycareer(Body).subscribe({
      next: (result) => {
        console.log("Successfully Add : ",result);
        alert("Successfully Add");
        this.careerform.reset();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
