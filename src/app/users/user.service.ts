import { Injectable, inject, signal, OnInit } from '@angular/core';
import { UserModel } from './User-model';
import { HttpClient } from '@angular/common/http';
import { backendurl } from '../app.config';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private httpClient = inject(HttpClient);
   allusers = signal<UserModel[]>([]);
   getallUsers() {
    return this.httpClient.get<UserModel[]>(`${backendurl}/get-users`)
  }
   addnewUser(user:UserModel){
    return this.httpClient.post<UserModel[]>(`${backendurl}/add-new-user`, user)
   }
    removeUser(userId:number){
      return this.httpClient.delete<UserModel[]>(`${backendurl}/delete-user/${userId}`)
   }
}
