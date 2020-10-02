import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  datas:Array<any>;
  constructor(private http: HttpClient) {
    this.http.get('http://localhost:5001/registers/id/'+sessionStorage.getItem("studentid")).subscribe((res:any[])=>{
      this.datas = res;
  });
  }
}
