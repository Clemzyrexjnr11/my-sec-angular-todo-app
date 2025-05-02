import { Injectable,inject } from '@angular/core';
import { DUMMY_USERS_TOKEN } from '../../main';
import { UserModel } from './User-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  dummyUsers = inject(DUMMY_USERS_TOKEN);

  
   getSelectedUser(selectedUserId?:number){
    return this.dummyUsers.find((user)=> user.userId === selectedUserId)
   }

   // trying to work this out
   
  //  selectedUserImagePath(selectedUser?:UserModel){
  //   return 'assets/'+ selectedUser?.userImg;
  // }

   removeUser(userId:number){
     return this.dummyUsers = this.dummyUsers.filter((user)=> user.userId !== userId)
   }
}
