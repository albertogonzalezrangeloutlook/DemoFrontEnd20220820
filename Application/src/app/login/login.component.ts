import { Component, NgModule, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string ='';
  password: string='';
  obj:any;

  constructor(public userService: UsersService){}
  ngOnInit(): void {
    this.username ='xalbertossc';
    this.password='x123ssc';
  }

  login() {

    console.log(this.username);
    console.log(this.password);
    
    //  this.router.navigate(['/search']);

    const user = {username: this.username, password: this.password};
    var res = this.userService.login(user).subscribe((data)=>{
      console.log(data);
      this.obj = data;
    });

  }
}
