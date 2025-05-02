import { Component,ElementRef,inject,ViewChild,signal,computed, Signal } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { UsersComponent } from "./users/users.component";
import { TasksComponent } from "./Task/tasks/tasks.component";
import { DUMMY_USERS_TOKEN } from "../main";
import { UserService } from "./users/user.service";
import { FormsModule } from "@angular/forms";
import { interval, find, map, Observable } from "rxjs";
import { toObservable } from "@angular/core/rxjs-interop";

@Component({
  selector:'app-root',
  imports: [HeaderComponent,UsersComponent,TasksComponent],
  templateUrl:'app.component.html',
  styleUrl:'app.component.css',
})

export class AppComponent {
   
  private userService = inject(UserService)
  dummyUsers = inject(DUMMY_USERS_TOKEN);

  selectedUserId?:number;
  
  onSelectedUser(userId:number){
   this.selectedUserId = userId;
  }

  get selectedUser(){
  return this.userService.getSelectedUser(this.selectedUserId)
  }
  get usersImage(){
    return this.dummyUsers.forEach((user)=> 'assets/'+user.userImg);
  }

  get selectedUserImagePath(){
    return 'assets/'+ this.selectedUser?.userImg;
  }
  removeSelectedUser(userId:number){
     return this.dummyUsers
      = this.userService.removeUser(userId);
  }
}