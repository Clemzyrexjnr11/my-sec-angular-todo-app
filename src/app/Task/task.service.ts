import { Injectable, inject } from '@angular/core';
import { dummyTask } from './tasks/dummyTask';
import { DUMMY_TASKS_TOKEN } from '../../main';
import { TaskModel } from './Task-model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  dummyUsersTask = inject(DUMMY_TASKS_TOKEN);

  selectedUserTask(userId: number) {
    return this.dummyUsersTask.filter((task) => task.userId === userId);
  }

  removeTask(taskId: number) {
    return (this.dummyUsersTask = this.dummyUsersTask.filter(
      (task) => task.taskId !== taskId
    ));
  }

  addNewTask(TaskData: TaskModel) {
    if (TaskData.taskdueDate === '') {
      alert('please provide us with all data');
    } else if (TaskData.taskDescription === '') {
      alert('please provide us with all data');
    } else
      this.dummyUsersTask.unshift({
        taskId: TaskData.taskId,
        userId: TaskData.userId,
        taskdueDate: TaskData.taskdueDate,
        taskDescription: TaskData.taskDescription,
      });
  }
}
