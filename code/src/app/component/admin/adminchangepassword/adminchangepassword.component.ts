import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApicallService } from 'src/app/service/apicall.service';

@Component({
  selector: 'app-adminchangepassword',
  templateUrl: './adminchangepassword.component.html',
  styleUrls: ['./adminchangepassword.component.scss']
})
export class AdminchangepasswordComponent {

  passwordChange! : FormGroup;

  constructor(private fb : FormBuilder,private _service : ApicallService){}

  ngOnInit(){

    this.passwordChange = this.fb.group({
      oldpsw : ['',Validators.required],
      newpsw : ['',Validators.required]
    });

  }

  submit(){

    let data : any = localStorage.getItem('admindata');
    data = JSON.parse(data);

    let Body = {
      _id : data._id,
      oldpsw : this.passwordChange.value.oldpsw,
      newpsw : this.passwordChange.value.newpsw
    }
    this._service.passwordchangeinlogin(Body).subscribe({
      next: (result) => {
        console.log("Successfully Change : ",result);
        alert("Successfully Change");
      },
      error: (err) => {
        console.log(err);
      }
    });
    this.passwordChange.reset();
  }
}
