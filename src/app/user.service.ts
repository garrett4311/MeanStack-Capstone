import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from "./model.user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public httpClient:HttpClient) { }

  getUserDetails():Observable<User[]> {
    return this.httpClient.get<User[]>("http://localhost:5000/api/users/usersFromDb");
  }

  deleteUser(userName):Observable<any>{
    return this.httpClient.delete("http://localhost:5000/api/users/deleteUserByName/"+userName);
  }

  addUser(userRef):Observable<any>{
    return this.httpClient.post("http://localhost:5000/api/users/addNewUser", userRef);
  }

  updateUser(userRef):Observable<any>{
    return this.httpClient.put("http://localhost:5000/api/users/updateUser", userRef)
  }
}
