import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApicallService } from 'src/app/service/apicall.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent {

  passwordChange! : FormGroup;

  constructor(private fb : FormBuilder,private _service : ApicallService){}

  ngOnInit(){

    this.passwordChange = this.fb.group({
      oldpsw : ['',Validators.required],
      newpsw : ['',Validators.required]
    });

  }

  submit(){

    let data : any = localStorage.getItem('studentdata');
    data = JSON.parse(data);

    let Body = {
      _id : data._id,
      oldpsw : this.passwordChange.value.oldpsw,
      newpsw : this.passwordChange.value.newpsw
    }
    this._service.passwordchangeinstudent(Body).subscribe({
      next: (result) => {
        console.log("Successfully Add : ",result);
        this._service.passwordchangeinlogin(Body).subscribe({
          next: (result) => {
            console.log("Successfully Add : ",result);
            alert("Successfully Change");
            this.passwordChange.reset();
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
