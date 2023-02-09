import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
    public username: string;
    public password: string;

  constructor(private http: HttpClient) {

  }

  login(username: string, password: string) {
    let body = new URLSearchParams();
        body.set('username', username);
        body.set('password', password);
        body.set('grant_type', 'password');
    let options = {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
        authorization: this.createBasicAuthToken('frontz', '12345'),
        withCredentials: true 
    };
    return this.http.post(`/api/security/oauth/token`, body.toString(), options
      ).pipe(map((res) => {
        this.username = username;
        this.password = password;
        this.registerSuccessfulLogin(username, password, res);
      }));
  }

  createBasicAuthToken(username: string, password: string) {
    return 'Basic ' + window.btoa(username + ":" + password);
  }


  //Save user detalles
  registerSuccessfulLogin(username: string, password: string, res: any) {
    console.log(res["access_token"]);
    console.log(res);
    localStorage.setItem("token", res["access_token"]);
    localStorage.setItem("nombre",  res["nombre"]);
    localStorage.setItem("apellido",  res["apellido"]);
    localStorage.setItem("email",  res["correo"]);

  }
}