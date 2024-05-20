import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentheader',
  templateUrl: './studentheader.component.html',
  styleUrls: ['./studentheader.component.scss']
})
export class StudentheaderComponent {

  name : any;

  constructor(private router : Router){}

  ngOnInit(){

    let data : any = localStorage.getItem('studentdata');
    data = JSON.parse(data);

    this.name = data.name;

  }

  logout(){

    localStorage.removeItem('logindata');
    localStorage.removeItem('studentdata');
    this.router.navigateByUrl('visitor');

  }

}
