import { Component,EventEmitter,Input,inject,Output } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { TaskService } from '../task.service';
import { AddTaskComponent } from "../add-task/add-task.component";
import { TaskModel } from '../Task-model';
import { UserService } from '../../users/user.service';



@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
 @Input() name?:string;
 @Input() userId!:number;
 @Output () removeuser = new EventEmitter();
 private taskService = inject(TaskService);
 private userService = inject(UserService)
 isAddingTask = false;


 get selectedUserTask (){
 return this.taskService.selectedUserTask(this.userId)
 }
 onCompleteTask(taskId:number){
 return this.taskService.removeTask(taskId).subscribe({
  next:(response)=> this.taskService.allTasks.set(response), 
 })
 }
 onAddTask(){
  this.isAddingTask = true
 }
 onAddingNewTask(newtask:TaskModel){
    return this.taskService.addNewTask(newtask).subscribe({
      next:(response)=> this.taskService.allTasks.set(response),
    })
    // console.log(newtask)
 }
 onCloseAddTask(){
  this.isAddingTask = false;
 }
  onclickArrowLeft(){
  this.removeuser.emit()
     
  }
 onRemoveUser(){
  this.removeuser.emit()
  return this.userService.removeUser(this.userId).subscribe({
    next:(response)=> this.userService.allusers.set(response),
  })

 }
}
