import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import User from 'src/models/User';
import UserDTO from 'src/models/UserDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User = new User("", "", null, "", "", "")
  // addchild(user: User) { }
  constructor(public http: HttpClient) { }
  baseRoute = `${"https://localhost:7110/api"}`
  adduser(u: User) {
    console.log(u);
    return this.http.post<UserDTO>(`https://localhost:7110/api/User`, u)
  }
  getAllUser() {
    return this.http.get<UserDTO[]>(`${this.baseRoute}/User`)
  }
}
