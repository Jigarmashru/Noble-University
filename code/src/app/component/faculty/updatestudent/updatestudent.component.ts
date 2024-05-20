import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApicallService } from 'src/app/service/apicall.service';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.scss']
})
export class UpdatestudentComponent {

  updatedata !: FormGroup;

  constructor(private route: ActivatedRoute, private _service: ApicallService, private fb: FormBuilder,private router: Router) { }

  studentdata: any;

  _id : any;
  ngOnInit() {


    this._id = this.route.snapshot.paramMap.get('id');

    this._service.getstudentdatabyid(this._id).subscribe({
      next: (result) => {
        this.studentdata = result;
        console.log("this.studentdata ", this.studentdata);
        this.updatedata = this.fb.group({
          bplace: [this.studentdata.birthplace, Validators.required],
          fdesignation: [this.studentdata.fatherdesignation, Validators.required],
          mpno: [this.studentdata.motherpno, Validators.required],
          hobby: [this.studentdata.hobbies, Validators.required],
          fullname: [this.studentdata.name, Validators.required],
          fnm: [this.studentdata.fathername, Validators.required],
          mnm: [this.studentdata.mothername, Validators.required],
          gender: [this.studentdata.gender, Validators.required],
          dob: [this.studentdata.dob, Validators.required],
          bgroup: [this.studentdata.bloodgroup, Validators.required],
          email: [this.studentdata.email, Validators.required],
          spno: [this.studentdata.studentpno, Validators.required],
          category: [this.studentdata.category, Validators.required],
          clg: [this.studentdata.faculty, Validators.required],
          dep: [this.studentdata.department, Validators.required],
          pro: [this.studentdata.program, Validators.required],
          sem: [this.studentdata.semester, Validators.required],
          rno: [this.studentdata.rno, Validators.required],
          adharno: [this.studentdata.adharcardno, Validators.required],
          ayear: [this.studentdata.admissionyear, Validators.required],
          atype: [this.studentdata.admissiontype, Validators.required],
          permanentadd: [this.studentdata.permananetadd, Validators.required],
          presentadd: [this.studentdata.presentadd, Validators.required],
          fpno: [this.studentdata.fatherpno, Validators.required],
          city: [this.studentdata.city, Validators.required],
          state: [this.studentdata.state, Validators.required],
          country: [this.studentdata.country, Validators.required],
          pincode: [this.studentdata.pincode, Validators.required],
          psw: [this.studentdata.password,Validators.required],
          attendence: [this.studentdata.attendence,Validators.required],
          post: [this.studentdata.post]
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  update(){

    let Body = {
      _id: this._id,
      id: this._id,
      
      name : this.updatedata.value.fullname,
      sem : this.updatedata.value.sem,
      spno : this.updatedata.value.spno,
      email : this.updatedata.value.email,
      adharno : this.updatedata.value.adharno,
      dob : this.updatedata.value.dob,
      psw : this.updatedata.value.psw,
      attendence : this.updatedata.value.attendence,
      birthplace : this.updatedata.value.bplace,
      fatherdesignation : this.updatedata.value.fdesignation,
      mnm : this.updatedata.value.mnm,
      mpno : this.updatedata.value.mpno,
      hobbies : this.updatedata.value.hobby,
      bloodgroup : this.updatedata.value.bgroup,
      fpno : this.updatedata.value.fpno,
      permananentadd : this.updatedata.value.permanentadd,
      presentadd : this.updatedata.value.presentadd,
      city : this.updatedata.value.city,
      fnm : this.updatedata.value.fnm,
      gender : this.updatedata.value.gender,
      category : this.updatedata.value.category,
      faculty : this.updatedata.value.clg,
      country : this.updatedata.value.country,
      department : this.updatedata.value.dep,
      program : this.updatedata.value.pro,
      atype : this.updatedata.value.atype,
      state : this.updatedata.value.state,
      pincode : this.updatedata.value.pincode,
      post : this.updatedata.value.post
    }

    this._service.updatestudent(Body).subscribe({
      next: (result) => {
        console.log("SuccessFully Update..",result);

        this._service.loginupdate(Body).subscribe({
          next: (result) => {
            console.log("SuccessFully Update..",result);
            alert("SuccessFully Update..");
            this.router.navigateByUrl("/faculty");
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
