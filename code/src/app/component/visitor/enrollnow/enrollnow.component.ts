import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApicallService } from 'src/app/service/apicall.service';

@Component({
  selector: 'app-enrollnow',
  templateUrl: './enrollnow.component.html',
  styleUrls: ['./enrollnow.component.scss']
})
export class EnrollnowComponent {
  enrollform!: FormGroup;

  list: any = [
    'ANM (Auxiliary Nurse and Midwife)',
    'B.A. with Competitive Exams',
    'BA Economics',
    'BA English',
    'BA Psychology',
    'B.A.M.S. (Ayurvedic)',
    'B.B.A.',
    'B.C.A.',
    'B.Com.',
    'B.Ed.',
    'B.H.M.S. (Homeopathic)',
    'B.M.S. (Bachelor Of Management Studies)',
    'B.Pharm.',
    'B.Sc.',
    'B.Sc.IT (Bachelor Of Science In Information Technology)',
    'B.Sc. Nursing',
    'B.Tech',
    'B.Voc. (Bachelor Of Vocation)',
    'Bachelor Of Library & Information Science (B.L.I.Sc.)',
    'CA With B.Com.',
    'D.M.L.T. (Diploma In Medical Laboratory Technology)',
    'Diploma Engineering',
    'Diploma In Animal Husbandary',
    'GNM (General Nursing And MidWifery)',
    'I.M.B.A. (Integrated Master Of Business Administration)',
    'I.M.C.A. (Integrated Master Of Computer Application)',
    'M.B.A.',
    'M.C.A.',
    'M.Com.',
    'M.Pharm.',
    'M.Sc.',
    'M.Sc.IT (Master Of Science In Information Technology)',
    'M.Tech.',
    'Master Of Library & Information Science (M.L.I.Sc.)',
    'P.B.B.Sc.Nursing',
    'PGDBM (Equivalent To MBA)',
    'Ph.D (Management & Commerce)',
    'Ph.D (Education)',
    'Ph.D (Engineering)',
    'Ph.D (Library Science)',
    'Ph.D (Computer Application)',
    'Ph.D (Pharmacy)',
    'Ph.D (Science)'
  ]

  constructor(private fb: FormBuilder,private _service: ApicallService){}

  ngOnInit(){
    this.enrollform = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['', Validators.required],
      course: ['', Validators.required]
    });
  }

  submit(){
    let Body = {
      "nm": this.enrollform.value.name,
      "mail": this.enrollform.value.email,
      "pno": this.enrollform.value.phonenumber,
      "course": this.enrollform.value.course
    }
    this._service.applyenrollnow(Body).subscribe({
      next: (result) => {
        console.log("Successfully Add : ",result);
        alert("Successfully Add");
        this.enrollform.reset();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
