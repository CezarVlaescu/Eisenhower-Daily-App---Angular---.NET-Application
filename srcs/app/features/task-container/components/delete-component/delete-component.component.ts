import { Component, Input } from '@angular/core';
import { DeletePool, NewTask } from '../../../../shared/types/tasksType';

@Component({
  selector: 'app-delete-component',
  templateUrl: './delete-component.component.html',
  styleUrls: ['./delete-component.component.scss']
})
export class DeleteComponentComponent {
  @Input() deletePool: DeletePool = { tasks: [] };
  deleteTasks: NewTask[] = [];

  ngOnInit(): void {
    this.updateDeleteTask();
  }
  
  private updateDeleteTask() : void {
    this.deleteTasks = this.deletePool.tasks;
  }
}
