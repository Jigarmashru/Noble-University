import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent {

  basicdata !: FormGroup;
  
  personaldata !: FormGroup;
  
  academicdata !: FormGroup;
  
  contactdata !: FormGroup;

  constructor(private fb : FormBuilder){}

  ngOnInit(){

    let data : any = localStorage.getItem('studentdata');
    data = JSON.parse(data);

    this.basicdata = this.fb.group({
      spno : [data.studentpno],
      email : [data.email],
      adharno : [data.adharcardno],
      dob : [data.dob],
      bplace : [data.birthplace],
      fdesignation : [data.fatherdesignation],
      mname : [data.mothername],
      mpno : [data.motherpno],
      hobby : [data.hobbies],
      bloodgroup : [data.bloodgroup],
      fpno : [data.fatherpno],
      presentadd : [data.presentadd],
      city : [data.city]
    });

    this.personaldata = this.fb.group({
      fullname : [data.name],
      marksheetname : [data.name],
      fnm : [data.fathername],
      mnm : [data.mothername],
      gender : [data.gender],
      dob : [data.dob],
      adharno : [data.adharcardno],
      bgroup : [data.bloodgroup],
      email : [data.email],
      spno : [data.studentpno],
      category : [data.category]
    });

    this.academicdata = this.fb.group({
      clg : [data.faculty],
      dep : [data.department],
      pro : [data.program],
      sem : [data.semester],
      rno : [data.rno],
      ano : [data.admissionno],
      eno : [data.enrollmentno],
      ayear : [data.admissionyear],
      atype : [data.admissiontype]
    });

    this.contactdata = this.fb.group({
      permanentadd : [data.permananentadd],
      presentadd : [data.presentadd],
      fpno : [data.fatherpno],
      city : [data.city],
      state : [data.state],
      country : [data.country],
      pincode : [data.pincode]
    });

  }

}
