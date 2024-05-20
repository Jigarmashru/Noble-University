import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApicallService } from 'src/app/service/apicall.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent {
  contactForm!: FormGroup;

  constructor(private fb : FormBuilder,private _service: ApicallService){}

  ngOnInit(){
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      pno: ['', Validators.required],
      msg: ['', Validators.required]
    });
  }

  submit(){
    let Body = {
      "nm": this.contactForm.value.name,
      "mail": this.contactForm.value.email,
      "pno": this.contactForm.value.pno,
      "msg": this.contactForm.value.msg
    }
    this._service.applycontactus(Body).subscribe({
      next: (result) => {
        console.log("Successfully Add : ",result);
        alert("Successfully Add");
        this.contactForm.reset();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
