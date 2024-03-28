import { Component } from '@angular/core';
import { NewTask, Importance } from '../../types/taskType';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  newTask: NewTask = new NewTask();
  importanceTask = Object.values(Importance);  

  constructor() {}

  onSubmitTask() {
    throw new Error('Method not implemented.');
    }

}
