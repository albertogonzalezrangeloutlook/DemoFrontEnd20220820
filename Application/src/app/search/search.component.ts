import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  CLIENTNUM: string='';
  router: any;

  constructor(public userService: UsersService) {}

  ngOnInit(): void {
    this.CLIENTNUM ='';
  }

  seach(){
    const req = {email: this.CLIENTNUM};
    this.userService.login(req).subscribe( 
      (data: any) => 
      {
        console.log(data);
        this.router.navigate('/detail',data);
      },
      (error: any) => {
        console.log(error);
      }
    );

  }
}


