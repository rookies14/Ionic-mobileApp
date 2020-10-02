import { Component,OnInit } from '@angular/core';
import { HttpClient, HttpHeaders,HttpRequest } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


// export interface jobModel{
//   Name: String,
//   Max:Number,
//   Transcript: Number,
//   Date: String,
//   Location: String,
//   Now: Number
// }
@Component({
  selector: 'app-detail',
  templateUrl: 'create.page.html',
  styleUrls: ['create.page.scss']
})
export class CreatePage implements OnInit{
  public Now: number = 0;
  constructor(public http: HttpClient,private route: ActivatedRoute) {
  }
  ngOnInit(){}
  private controller = document.querySelector('ion-alert-controller');
  processForm(formValue:any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
      //'Content-Type': 'application/x-www-form-urlencoded'
    });
    let options = {
      headers: headers
    }
    this.route.data.subscribe(body => {
      body = formValue;
      this.http.post("http://localhost:5001/jobs/add", body,  options)
      .subscribe(data => {
        console.log(data);
        window.location.href = '/app/tabs/tab1';
       }, error => {
        console.log(error);
      });
    });
      /*event.preventDefault();
      this.controller.create({
        header: 'Submit Activity',
        message: `Created Activity ${this.jobSchema.name} Success</b>`,
        buttons: [{
          text: 'OK'
        }]
      }).then(alert => alert.present());*/
    }
  // handleNameValue(event) {
  //   this.Name = event.target.value;
  // }
  // handleDateValue(event) {
  //   this.Date = event.target.value;
  // }
  // handleMaxValue(event) {
  //   this.Max = event.target.value;
  // }
  // handleTransciptValue(event) {
  //   this.Transcript = event.target.value;
  // }
  // handleAddressValue(event) {
  //   this.Location = event.target.value;
  // }
  

}