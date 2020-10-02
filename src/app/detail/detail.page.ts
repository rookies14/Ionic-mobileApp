import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.page.html',
  styleUrls: ['detail.page.scss']
})
export class DetailPage {
  datas:Array<any>;
  id:String;
  name:String;
  trans:String;
  now:Number;
  max:Number;
  location:String;
  constructor(private http: HttpClient,private route: ActivatedRoute) {
    console.log(this.route.params);
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.http.get('http://localhost:5001/jobs/byid/'+this.id).subscribe((res:any[])=>{
      this.datas = res[0];
      this.name = this.datas['Name'];
      this.trans = this.datas['Transcript'];
      this.now = this.datas['Now'];
      this.max = this.datas['Max'];
      this.location = this.datas['Location'];
      localStorage.setItem('Name', params['id']);
    });
  });
  }

  joinGroup(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
      //'Content-Type': 'application/x-www-form-urlencoded'
    });
    let options = {
      headers: headers
    }
    let Name = localStorage.getItem('Name');
    let Id = sessionStorage.getItem("studentid");
    let data = {"Name":Name,"Id":Id};
    let body = JSON.stringify(data);
    this.http.post("http://localhost:5001/jobs/update", body, options)
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });
    this.http.post("http://localhost:5001/registers/add", body, options)
      .subscribe(data => {
        console.log(data);
        window.location.href = '/app/tabs/tab2';
       }, error => {
        console.log(error);
      });
  }
}
