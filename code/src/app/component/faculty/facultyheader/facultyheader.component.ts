import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facultyheader',
  templateUrl: './facultyheader.component.html',
  styleUrls: ['./facultyheader.component.scss']
})
export class FacultyheaderComponent {
  constructor(private router: Router){}

  ngOnInit(){}

  logout(){

    localStorage.removeItem('logindata');
    localStorage.removeItem('facultydata');
    this.router.navigateByUrl('visitor');

  }
}
