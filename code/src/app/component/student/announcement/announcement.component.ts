import { Component } from '@angular/core';
import { ApicallService } from 'src/app/service/apicall.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent {

  announcement : any;

  constructor(private _service: ApicallService){}

  ngOnInit(){
    this._service.getallannouncement().subscribe({
      next: (result) => {
        this.announcement = result;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
