import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Credentials } from "../interfaces/credentials.interface";
import { User } from '../interfaces/user.interface';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;

  constructor(private http: HttpClient) { }

  login(credentials: Credentials): Observable<Credentials> {
    return this.http.post<Credentials>('http://localhost:3000/user/login', credentials)
      .pipe(
        map((resp: any): any => {
          localStorage.setItem("token", resp.token);
          this.user = resp.data;
          return resp;
        })
      )
  }

  isLogged() {
    let token = localStorage.getItem('token');
    return token ? true : false
  }

  registerUser(user: User): Observable<User> {
    return this.http.post<Credentials>('http://localhost:3000/user/create', user)
      .pipe(
        map((resp: any): any => {
          return resp;
        })
      )
  }

  getToken(): string | null {
    return localStorage.getItem('token') ? localStorage.getItem('token') : null;
  }

  getUser() {
    let token = this.getToken();
    if (token) {
      let decode = jwt_decode(token)["data"];
      let userLogin: User = {
        id: decode?._id,
        name: decode?.name,
        lastName: decode?.lastName,
        year: decode?.year,
        address: decode?.address,
        email: decode?.email,
        password: '',
        rol: decode?.rol
      }
      return userLogin;
    }
    return null;
  }

  logout() {
    localStorage.removeItem('token');
  }
}
