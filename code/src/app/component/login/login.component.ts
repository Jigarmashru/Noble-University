import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/service/apicall.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm! : FormGroup;

  constructor(private fb : FormBuilder,private _service: ApicallService,private router: Router){}

  ngOnInit(){
    this.loginForm = this.fb.group({
      email : ['',[Validators.required,Validators.email]],
      password : ['',Validators.required]
    });
  }

  login(){
    let Body = {
      mail : this.loginForm.value.email
    }
    this._service.loginCheck(Body).subscribe({
      next: (result) => {
        if(result.password === this.loginForm.value.password){
          localStorage.setItem("logindata",JSON.stringify(result));
          if(result.post === "Student"){
            console.log("This Is Student Panel..");
            alert("Login Successfull");
            this.router.navigateByUrl('/student');
          }
          if(result.post === "Faculty"){
            console.log("This Is Faculty Panel..");
            alert("Login Successfull");
            this.router.navigateByUrl('/faculty');
          }
          if(result.post === "Admin"){
            console.log("This Is Admin Panel..");
            alert("Login Successfull");
            this.router.navigateByUrl('/admin');
          }
        }
        else{
          console.log("Please Enter Valid Password...")
          alert("Please Enter Valid Password...")
        }
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
