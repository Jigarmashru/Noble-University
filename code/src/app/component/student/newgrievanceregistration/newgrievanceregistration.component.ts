import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApicallService } from 'src/app/service/apicall.service';

@Component({
  selector: 'app-newgrievanceregistration',
  templateUrl: './newgrievanceregistration.component.html',
  styleUrls: ['./newgrievanceregistration.component.scss']
})
export class NewgrievanceregistrationComponent {
  subcomplaintdata = [
    "0013 - Noble Star Ayurved Hospital",
    "0014 - Noble Star Homeopathy Hospital",
    "0015 - Noble Star Nursing College",
    "0019 - Noble Collage Of Commerce",
    "01 - Faculty Of Ayurveda (NU)",
    "02 - Faculty Of Homeopathy (NU)",
    "03 - Faculty Of Engineering & Technology (NU)",
    "04 - Faculty Of Pharmacy (NU)",
    "05 - Faculty Of Management & Commerce (NU)",
    "06 - Faculty Of Nursing (NU)",
    "07 - Faculty Of Science (NU)",
    "08 - Faculty Of Education (NU)",
    "09 - Faculty Of Computer Application (NU)",
    "10 - Faculty Of Applied Science, Humanities And Arts",
    "11 - Nobel Diploma Engineering College (NGI)",
    "12 - Noble Pharmacy College (NGI)",
    "13 - Shree Vivek Bharti Trust B.Ed. College (NGI)",
    "14 - Noble Nursing School (GNM) (NGI)",
    "15 - Noble Nursing School (ANM) (NGI)",
    "16 - Noble BSc Nursing College (NGI)",
    "17 - Noble Science College (NGI)",
    "18 - Noble Polytechnic In Animal Husbandry College",
    "19 - Noble Ayu. College And Research (NGI)",
    "20 - Noble Homo. College And Research (NGI)",
    "21 - Noble DMLT Center",
    "22 - Noble Commerce College (NGI)",
    "23 - Noble Institue Of Business Management (NGI)",
    "24 - Noble Post Basic B.Sc. Nursing College (NGI)",
    "25 - Noble Engineering College (NGI)",
    "26 - Noble Star Diploma Engineering College (NS)",
    "27 - Noble Star Engineering College (NS)",
    "28 - Noble Star B.Sc. College (NS)",
    "29 - Noble University (NU)",
    "30 - Noble Arts College"
  ]

  complaintdata : any; 
  
  complaintapplication !: FormGroup;

  constructor(private fb : FormBuilder,private _service: ApicallService){}

  ngOnInit(){
    this.get();
  }

  get(){
    let data:any = localStorage.getItem('studentdata');
    data = JSON.parse(data)

    this._service.getcomplaintdatabyid(data.enrollmentno).subscribe({
      next: (result) => {
        this.complaintdata = result;
      },
      error: (err) => {
        console.log(err);
      }
    });

    this.complaintapplication = this.fb.group({
      name:[data.name],
      eno:[data.enrollmentno],
      pro:[data.program],
      department:[data.department],
      sem:[data.semester],
      pno:[data.studentpno,Validators.required],
      mail:[data.email,[Validators.required,Validators.email]],
      complaint:['Grievance',Validators.required],
      subcomplaint:['',Validators.required],
      description:['',Validators.required]
    });
  }

  submit(){
    console.log(this.complaintapplication.value);
    let Body = {
      "name": this.complaintapplication.value.name,
      "enrollno": this.complaintapplication.value.eno,
      "complaint": this.complaintapplication.value.complaint,
      "subcomplaint": this.complaintapplication.value.subcomplaint,
      "description": this.complaintapplication.value.description
    }
    this._service.applycomplaint(Body).subscribe({
      next: (result) => {
        console.log("Successfully Add : ",result);
        alert("Successfully Add");
        this.get();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
