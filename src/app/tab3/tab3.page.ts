import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  datas:Array<any>;
  id:String;
  name:String;
  studentid:String;
  faculty:String;
  email:String;
  constructor(private http: HttpClient) {
    this.http.get('http://localhost:5001/students/id/'+sessionStorage.getItem("studentid")).subscribe((res:any[])=>{
      this.datas = res[0];
      this.id = this.datas['_id'];
      this.name = this.datas['Name'];
      this.studentid = this.datas['StudentID'];
      this.faculty = this.datas['Faculty'];
      this.email = this.datas['Email'];
    });
  }
  
}
