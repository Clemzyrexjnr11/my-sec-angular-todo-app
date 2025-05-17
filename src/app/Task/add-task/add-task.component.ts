import {
  Component,
  EventEmitter,
  Input,
  model,
  Output,
  inject,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TaskService } from '../task.service';
import { TaskModel } from '../Task-model';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Input() userId!: number;
  @Input() hideTask!: boolean;
  @Output() hideTaskChange = new EventEmitter();
  @Output() taskFormValue = new EventEmitter();

  private taskService = inject(TaskService);

  taskform = new FormGroup({
    enteredTaskDuedate: new FormControl('', {
      validators: [Validators.required],
    }),
    enteredTaskDescription: new FormControl('', {
      validators: [Validators.required],
    }),
  });

  onCloseAddTask() {
    this.hideTaskChange.emit(false);
  }

  onAddNewTask() {
    let taskformvalues = this.taskform.value;
    let newTask = {
      taskduedate: taskformvalues.enteredTaskDuedate,
      taskdescription: taskformvalues.enteredTaskDescription,
      userId: this.userId,
    };
    this.taskFormValue.emit(newTask);
    this.taskform.reset();
  }
}
