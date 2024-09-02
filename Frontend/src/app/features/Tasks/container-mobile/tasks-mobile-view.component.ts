import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TasksService } from 'src/app/core/services/tasks/tasks.service';
import { getDateUtil } from 'src/app/core/utils/getDateUtil';
import { DialogComponent } from 'src/app/shared/components/DialogPopUp/dialog.component';
import { getRandomMotto } from 'src/app/shared/types/mottos';
import { TButtonObject, TTask, TTaskPoolResponse } from 'src/app/shared/types/SharedTypes';

@Component({
  selector: 'app-tasks-mobile-view',
  templateUrl: './tasks-mobile-view.component.html',
  styleUrls: ['./tasks-mobile-view.component.scss']
})
export class TasksMobileViewComponent {
  public buttonInput: TButtonObject = { name: 'Add Task'}
  public data? : TTask;
  public taskPool? : TTaskPoolResponse;
  public motto = getRandomMotto();
  public date = getDateUtil();

  constructor(
    private dialog: MatDialog,
    private taskService : TasksService
  ) {} 

  ngOnInit(): void {
    this.getTaskPool();
  }
  
  public openDialog(): void {
    const dialogRef = this.dialog
    .open(DialogComponent, {
      height: '400px',
      width: '500px',
      data: {}
    })

    dialogRef.afterClosed()
    .subscribe((resultTask: TTask) => {
      if(resultTask) {
        this.taskService
      .createAsync(resultTask)
      .subscribe({
        next: (resultTask : TTask) => {
          console.log("Task created succesfully", resultTask);
        },
        error: (err: Error) => {
          console.error(err);
        }
      }
      )}
      else throw new Error('Task creation failed ');
    })
  }

  public getTaskPool() : void {
    this.taskService.getAllAsync().subscribe({
      next: (result : TTaskPoolResponse) => {
        if(result) this.taskPool = result
      },
      error: (err: Error) => {
        console.error(err);
      }
    })
  } 

}
