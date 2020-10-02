import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  datas:Array<any>;
  constructor(private http: HttpClient) {
    this.http.get('http://localhost:5001/jobs/').subscribe((res:any[])=>{
      this.datas = res;
      sessionStorage.setItem("studentid", "5910110425");
  });
  }

}
