import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../model/userdata';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _service:LoginServiceService,private _router:Router) { }

  UserDataModel: UserData =new UserData();

  ngOnInit(): void {
  }
loginUser()
{
  this._service.loginUser(this.UserDataModel).subscribe(res=>{
    localStorage.setItem('token',res.token);
    this._router.navigate(['createbook/add']);
  },res=>console.log(res));  
}
}
