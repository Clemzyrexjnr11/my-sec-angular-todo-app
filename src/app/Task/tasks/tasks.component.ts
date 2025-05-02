import { Component,EventEmitter,Input,inject,Output } from '@angular/core';
import { TaskComponent } from '../task/task.component';
// import { dummyTask } from './dummyTask';
import { DUMMY_TASKS_TOKEN } from '../../../main';
import { TaskService } from '../task.service';
import { AddTaskComponent } from "../add-task/add-task.component";
// import { UserService } from '../../users/user.service';


@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
 @Input() img?:string;
 @Input() name?:string;
 @Input() userId!:number;
 @Output() remove = new EventEmitter<number>();


   private taskService = inject(TaskService);
  //  private userService = inject(UserService)

   isAddingTask = false;

 get selectedUserTask (){
  return this.taskService.selectedUserTask(this.userId)
 }
 onCompleteTask(taskId:number){
 return this.taskService.removeTask(taskId)
 }
 onAddTask(){
  this.isAddingTask = true
 }
 onCloseAddTask(){
  this.isAddingTask = false;
 }

 onRemoveUser(){
  // return this.userService.removeUser(this.userId)

  this.remove.emit(this.userId);
 }
}
