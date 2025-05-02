import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { InjectionToken } from '@angular/core';
import { dummyTask } from './app/Task/tasks/dummyTask';
import { TaskModel } from './app/Task/Task-model';
import { dummyUsers } from './app/users/dummyUsers';
import { UserModel } from './app/users/User-model';

export const DUMMY_TASKS_TOKEN = new InjectionToken<TaskModel[]>('dum_task_token');

export const DUMMY_USERS_TOKEN = new InjectionToken<UserModel[]>('dum_user_token');

bootstrapApplication(AppComponent, {providers:[
  {provide:DUMMY_TASKS_TOKEN, useValue:dummyTask},
  {provide:DUMMY_USERS_TOKEN, useValue:dummyUsers}

],})
  .catch((err) => console.error(err));
