import { Component } from '@angular/core';
import { NewTask, Importance } from '../../../../shared/types/tasksType';
import { TaskSharedService } from '../../services/task-shared-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  newTask: NewTask;
  importanceTask = Object.values(Importance);  

  constructor(
    private taskSharedService: TaskSharedService,
    private router: Router
  ) {
    this.newTask = new NewTask();
  }

  onSubmitTask(){
    this.taskSharedService.addTask(this.newTask);
    return this.router.navigate(['/home'])
  }

}
