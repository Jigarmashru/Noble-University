import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApicallService } from 'src/app/service/apicall.service';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent {

  
  certificatedata = [
    "Admission Letter",
    "Bonafide Letter",
    "Bonafide Letter (Freeship Card)",
    "Bus Pass Certificate",
    "CMSS Certificate",
    "Exemption Certificate",
    "Fee Structure",
    "MY - SY Certificate",
    "No Due Certificate",
    "Provisional Admission Letter",
    "Renew CMSS Certificate",
    "Renew MY - SY Certificate",
    "Transfer Certificate",
  ]
  
  purposecertificatedata = [
    "Aadhar Card Update",
    "AIU Verification",
    "Bank Account Open",
    "Bank Loan",
    "Bus Pass",
    "Cancel Admission",
    "CMSS Scholarship",
    "Driving Licence",
    "Education Loan",
    "File IT Return",
    "Food Bill",
    "Freeship Card",
    "Insurance",
    "Living In Hostel",
    "Migration",
    "MY - SY Scholarship",
    "Other Study",
    "Pass Port",
    "PF",
    "Purchase A Bike",
    "Regular Student NOC",
    "Scholarship",
    "Study Tour",
    "Testing"
  ]
  
  certificateapplication !: FormGroup;

  constructor(private fb : FormBuilder,private _service: ApicallService){}

  ngOnInit(){

    let data : any = localStorage.getItem('studentdata');
    data = JSON.parse(data);

    this.certificateapplication = this.fb.group({
      name:[data.name],
      eno:[data.enrollmentno],
      pro:[data.program],
      department:[data.department],
      ayear:[data.admissionyear],
      dob:[data.dob],
      cyear:['2023-2024'],
      sem:[data.semester],
      pno:[data.studentpno,Validators.required],
      mail:[data.email,[Validators.required,Validators.email]],
      certi:['',Validators.required],
      purposecerti:['',Validators.required]
    });
  }

  submit(){
    let Body = {
      "name": this.certificateapplication.value.name,
      "enrollno": this.certificateapplication.value.eno,
      "certi": this.certificateapplication.value.certi,
      "purposecerti": this.certificateapplication.value.purposecerti
    }
    this._service.applycertificate(Body).subscribe({
      next: (result) => {
        console.log("Successfully Add : ",result);
        alert("Successfully Apply");
        this.certificateapplication.reset();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
