import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform:any;
  url:any="http://localhost:5005/";
  

  login(event: any) {
    if (this.loginform.valid) {
      const httpOptions = {
        headers: new HttpHeaders({
          'content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'authorization': 'Basic ' + btoa(this.loginform.value['username'] + ":" + this.loginform.value['password'])
        })
      }
      this.http.get(this.url + "login", httpOptions).subscribe(
        data => {
          localStorage.setItem("access_token", data['access_token']);
          localStorage.setItem("refresh_token", data['refresh_token']);
          this.router.navigate(['/home']);
        }, error => {
          console.log(error);
        })
    }
  }

  constructor(public http:HttpClient,public router:Router,public fb:FormBuilder) {
    this.loginform = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]],
    });
   }

  ngOnInit() {
  }

}
