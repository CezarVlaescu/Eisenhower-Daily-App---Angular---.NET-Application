import { Component, OnDestroy, OnInit } from '@angular/core';
import { TaskSharedService } from '../services/task-shared-service.service';
import { NewTask, DecidePool, DelegatePool, DoPool, DeletePool, Importance  } from '../types/taskType';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss']
})
export class TaskContainerComponent implements OnInit, OnDestroy {
  
  public tasks: NewTask[] = [];
  public doTasks: DoPool = { tasks: []};
  public delegateTasks: DelegatePool = { tasks: []};;
  public decideTasks: DecidePool = { tasks: []};;
  public deleteTasks: DeletePool = { tasks: []};;  
  private $unsubscribe = new Subject<void>();

  constructor(private taskSharedService: TaskSharedService) {}
  
  ngOnInit(): void {
    this.taskSharedService.tasks$
    .pipe(takeUntil(this.$unsubscribe))
    .subscribe(tasks => {
      this.tasks = tasks;
      this.onTaskAdded();
    });
    console.log(this.tasks);
  }

  ngOnDestroy(): void {
    this.$unsubscribe.next();
    this.$unsubscribe.complete();
  }

  public onTaskAdded() : void {    
    if(this.tasks[0].importance === undefined){
      throw new Error(`importance not set`)
    }
    this.tasks.forEach(task => {
      switch (task.importance) {
        case Importance.Do:
          this.doTasks.tasks.push(task);
          break;
        case Importance.Decide:
          this.decideTasks.tasks.push(task);
          break;
        case Importance.Delegate:
          this.delegateTasks.tasks.push(task);
          break;
        case Importance.Delete:
          this.deleteTasks.tasks.push(task);
          break;

        default:
          console.warn(`Task with undefined or unexpected importance: ${task}`);
          break;
      }
    });
  }
}

