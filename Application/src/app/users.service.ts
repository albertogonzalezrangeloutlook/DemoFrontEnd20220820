import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, map, catchError, throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  url: string="http://localhost:1337/";
  constructor(private http: HttpClient) {}

  login(user: any) {
    return this.doPost(user,"user/login");
  }

  register(user: any) {
    return this.doPost(user,"user/register");
  }
  
  
  public doPost(req:any,action:string): Observable<any> {
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache'
    });
    return this.http.post(this.url+action, req, { headers: httpHeaders }).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );

   

  } 
  private extractData(res: any) {
    console.log(res);
    let body = res;
    return body;
  }
  private handleError(error: any) {
    console.error(error.message || error);
    return error.message;
  } 
}