import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users : any;
  access_token: any;
  ngOnInit() {
    this.access_token = localStorage.getItem("access_token");
    this.getusers()
  }

  getusers(){
    var url = "http://localhost:5005/" + "api/get/users";
    var headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      "content-type": "application/json",
      "authorization": "Bearer " + this.access_token
    })
    this.http.get(url, {headers: headers}).subscribe(
      data=>{
        this.users = data;
        console.log(data);
    }, error => {
      console.log(error);
    })
  }
  constructor(public http:HttpClient) { }


}
