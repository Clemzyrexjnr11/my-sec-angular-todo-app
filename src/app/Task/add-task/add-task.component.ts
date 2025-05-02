import { Component,EventEmitter,Input,model,Output,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';
import { TaskModel } from '../Task-model';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
@Input() userId!:number;
@Input () hideTask!:boolean;
@Output() hideTaskChange = new EventEmitter();

private taskService = inject(TaskService)

enteredTaskDuedate = '';
enteredTaskDescription = '';

  onCloseAddTask(){
  this.hideTaskChange.emit(false);
    
    } 
   
  onAddNewTask(){
    this.taskService.addNewTask({
      taskId: new Date().getMilliseconds(),
      userId:this.userId,
      taskdueDate:this.enteredTaskDuedate,
      taskDescription:this.enteredTaskDescription
    });
   
  }
}
