import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private _http : HttpClient) { }

  // Student API
  getstudentdatabyid(Id:any):Observable<any>{
    return this._http.get(`http://localhost:3000/students/getStudentById/${Id}`);
  }
  passwordchangeinstudent(Body:any):Observable<any>{
    return this._http.post(`http://localhost:3000/students/changePassword`,Body);
  }
  getallstudent():Observable<any>{
    return this._http.get(`http://localhost:3000/students/getAllStudents`);
  }
  updatestudent(Body:any):Observable<any>{
    return this._http.post(`http://localhost:3000/students/updateStudent`,Body);
  }
  deletestudent(id:any):Observable<any>{
    return this._http.get(`http://localhost:3000/students/deleteOneStudent/${id}`);
  }
  addstudent(Body:any):Observable<any>{
    return this._http.post(`http://localhost:3000/students/addStudent`,Body);
  }

  applycertificate(Body:any):Observable<any>{
    return this._http.post(`http://localhost:3000/students/applicationOfCertificate`,Body);
    // return this._http.post(`http://192.168.137.1:3000/students/applicationOfCertificate`,Body);
  }
  getallcertificate():Observable<any>{
    return this._http.get(`http://localhost:3000/students/getAllCertificate`);
  }
  deletecertificate(id:any):Observable<any>{
    return this._http.get(`http://localhost:3000/students/deleteOneCertificate/${id}`)
  }

  applycomplaint(Body:any):Observable<any>{
    return this._http.post(`http://localhost:3000/students/applicationOfComplaint`,Body);
  }
  getcomplaintdatabyid(enrollNo:any):Observable<any>{
    return this._http.get(`http://localhost:3000/students/getComplaintById/${enrollNo}`);
  }
  getallcomplaint():Observable<any>{
    return this._http.get(`http://localhost:3000/students/getAllComplaint`);
  }
  deletecomplaint(id:any):Observable<any>{
    return this._http.get(`http://localhost:3000/students/deleteOneComplaint/${id}`)
  }

  applyfeedback(Body:any):Observable<any>{
    return this._http.post(`http://localhost:3000/students/applicationOfFeedback`,Body);
  }
  getfeedbackdatabyid(enrollNo:any):Observable<any>{
    return this._http.get(`http://localhost:3000/students/getFeedbackById/${enrollNo}`);
  }
  getallfeedback():Observable<any>{
    return this._http.get(`http://localhost:3000/students/getAllFeedback`);
  }
  deletefeedback(id:any):Observable<any>{
    return this._http.get(`http://localhost:3000/students/deleteOneFeedback/${id}`)
  }

  applyleave(Body:any):Observable<any>{
    return this._http.post(`http://localhost:3000/students/applicationOfLeave`,Body);
  }
  getleavedatabyid(enrollNo:any):Observable<any>{
    return this._http.get(`http://localhost:3000/students/getLeaveById/${enrollNo}`);
  }
  getallleave():Observable<any>{
    return this._http.get(`http://localhost:3000/students/getAllLeave`);
  }
  deleteleave(id:any):Observable<any>{
    return this._http.get(`http://localhost:3000/students/deleteOneLeave/${id}`)
  }

  getallholiday():Observable<any>{
    return this._http.get(`http://localhost:3000/holiday/getAllHoliday`);
  }
  addholiday(Body:any):Observable<any>{
    return this._http.post(`http://localhost:3000/holiday/addHoliday`,Body);
  }
  deleteholiday(id:any):Observable<any>{
    return this._http.get(`http://localhost:3000/holiday/deleteOneHoliday/${id}`);
  }
  
  getallannouncement():Observable<any>{
    return this._http.get(`http://localhost:3000/announcement/getAllAnnouncement`);
  }
  addannouncement(Body:any):Observable<any>{
    return this._http.post(`http://localhost:3000/announcement/addAnnouncement`,Body);
  }
  deleteannouncement(id:any):Observable<any>{
    return this._http.get(`http://localhost:3000/announcement/deleteOneAnnouncement/${id}`);
  }

  passwordchangeinlogin(Body:any):Observable<any>{
    return this._http.post(`http://localhost:3000/login/changePassword`,Body);
  }


  // Visitor API
  applycareer(Body:any):Observable<any>{
    return this._http.post(`http://localhost:3000/visitors/applicationOfCareer`,Body);
  }
  getallcareer():Observable<any>{
    return this._http.get(`http://localhost:3000/visitors/getAllCareer`);
  }

  applycontactus(Body:any):Observable<any>{
    return this._http.post(`http://localhost:3000/visitors/applicationOfContactUs`,Body);
  }
  getallcontactus():Observable<any>{
    return this._http.get(`http://localhost:3000/visitors/getAllContactUs`);
  }

  applyenrollnow(Body:any):Observable<any>{
    return this._http.post(`http://localhost:3000/visitors/applicationOfEnrollNow`,Body);
  }
  getallenrollnow():Observable<any>{
    return this._http.get(`http://localhost:3000/visitors/getAllEnrollNow`);
  }



  // login
  loginCheck(Body:any):Observable<any>{
    return this._http.post(`http://localhost:3000/login/loginCheck`,Body);
  }
  loginupdate(Body:any):Observable<any>{
    return this._http.post(`http://localhost:3000/login/loginUpdate`,Body);
  }
  loginadd(Body:any):Observable<any>{
    return this._http.post(`http://localhost:3000/login/loginAdd`,Body);
  }
  logindelete(id:any):Observable<any>{
    return this._http.get(`http://localhost:3000/login/loginDelete/${id}`);
  }
  



  //faculty api
  getfacultydatabyid(Id:any):Observable<any>{
    return this._http.get(`http://localhost:3000/faculty/getOneFaculty/${Id}`);
  }
  passwordchangeinfaculty(Body:any):Observable<any>{
    return this._http.post(`http://localhost:3000/faculty/changePassword`,Body);
  }
  addfaculty(Body:any):Observable<any>{
    return this._http.post(`http://localhost:3000/faculty/addFaculty`,Body);
  }
  deletefaculty(id:any):Observable<any>{
    return this._http.get(`http://localhost:3000/faculty/deleteOneFaculty/${id}`);
  }
  getallfaculty():Observable<any>{
    return this._http.get(`http://localhost:3000/faculty/getAllFaculty`);
  }
  updatefaculty(Body:any):Observable<any>{
    return this._http.post(`http://localhost:3000/faculty/updateFaculty`,Body);
  }
}
