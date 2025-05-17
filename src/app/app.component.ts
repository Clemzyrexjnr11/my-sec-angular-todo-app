import { Component, ElementRef, inject, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { TasksComponent } from './Task/tasks/tasks.component';
import { UserService } from './users/user.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserModel } from './users/User-model';
import { catchError, find, throwError } from 'rxjs';
import { TaskService } from './Task/task.service';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UsersComponent, TasksComponent],
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.css',
})
export class AppComponent {
  private userService = inject(UserService);
  private taskService = inject(TaskService);
  allusers = this.userService.allusers;
  allTasks = this.taskService.allTasks;
  ngOnInit() {
    this.userService.getallUsers().subscribe({
      next: (response) => this.allusers.set(response),
    });

    this.taskService.getAllTasks().subscribe({
    next:(response)=> this.allTasks.set(response),
    })
  }
  selectedUser?:UserModel;

  getSelectedUser(userid: number) {
    this.selectedUser = this.allusers().find((user) => user.userid === userid);
  }
  onAddNewUser(user: UserModel) {
    return this.userService
      .addnewUser(user)
      .pipe(
        catchError((error) => {
          return throwError(() => new Error('Error occured while adding user'));
        })
      )
      .subscribe({
        next: (response) => this.allusers.set(response),
        error: (error: Error) => console.log(error.message),
      });
  }
  onRemoveUser(){
    this.selectedUser = undefined;
  }
}
