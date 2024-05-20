import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.scss']
})
export class AdminheaderComponent {

  constructor(private router : Router){}

  ngOnInit(){}

  logout(){

    localStorage.removeItem('logindata');
    localStorage.removeItem('admindata');
    this.router.navigateByUrl('visitor');

  }

}
