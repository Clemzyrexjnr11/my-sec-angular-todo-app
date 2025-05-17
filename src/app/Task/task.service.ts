import { Injectable, inject, signal} from '@angular/core';
import { TaskModel } from './Task-model';
import { HttpClient } from '@angular/common/http';
import { backendurl } from '../app.config';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private httpClient = inject(HttpClient);
  allTasks = signal<TaskModel[]>([]);

  getAllTasks(){
    return this.httpClient.get<TaskModel[]>(`${backendurl}/get-tasks`)
  }

  selectedUserTask(userId: number) {
    return this.allTasks().filter((task)=> task.userId === userId);
  }

  removeTask(taskId: number) {
     return this.httpClient.delete<TaskModel[]>(`${backendurl}/delete-task/${taskId}`)
  }

  addNewTask(TaskData: TaskModel) {
   return this.httpClient.post<TaskModel[]>(`${backendurl}/add-new-task`, TaskData)
  }

}
 