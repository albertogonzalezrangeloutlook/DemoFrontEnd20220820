import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string ='';
  password: string='';
  
  constructor(public userService: UsersService) {}

  ngOnInit(): void {
    this.username ='';
    this.password='';
  }
  register() {
    console.log(this.username);
    console.log(this.password);
    const user = {username: this.username, password: this.password};
    this.userService.register(user).subscribe( 
      (data: any) => 
      {
        console.log(data); 
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
