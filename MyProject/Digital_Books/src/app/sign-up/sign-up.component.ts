import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../model/userdata';
import { registerData } from '../model/register';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  constructor(private _service:LoginServiceService,private _router:Router) { }

  UserDataModels: UserData =new UserData();
  SearchBookModel: registerData = new registerData();

  ngOnInit(): void {
  }
  registeruser()
{
  debugger;
  this._service.registerUser(this.SearchBookModel).subscribe(res=>{
    localStorage.setItem('token',res.token);
    this._router.navigate(['createbook/add']);
  },res=>console.log(res));  
}

}
