// state management service

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NewTask } from '../types/taskType';

@Injectable({
  providedIn: 'root'
})
export class TaskSharedService {

  private tasksSubject = new BehaviorSubject<NewTask[]>([]);
  tasks$ = this.tasksSubject.asObservable();

  private tasks: NewTask[] = [];

  constructor() { }

  addTask(newTask: NewTask){
    this.tasks.push(newTask);
    this.tasksSubject.next(this.tasks);
  }

  getTasks = () => this.tasks.slice();
}
