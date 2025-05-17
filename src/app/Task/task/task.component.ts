import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskModel } from '../Task-model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input ()task?:TaskModel;
  @Output() complete = new EventEmitter<number>()
  completeTask(){
    this.complete.emit(this.task?.taskid);
  }
}
