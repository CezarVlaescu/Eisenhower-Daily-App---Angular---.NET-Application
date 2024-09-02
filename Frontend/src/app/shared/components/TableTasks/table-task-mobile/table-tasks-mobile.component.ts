import { Component, Input, SimpleChanges } from '@angular/core';
import { TTask } from 'src/app/shared/types/SharedTypes';

export interface ITaskElement {
  name: string;
  hour: Date;
}

@Component({
  selector: 'app-table-tasks-mobile',
  templateUrl: './table-tasks-mobile.component.html',
  styleUrls: ['./table-tasks-mobile.component.scss']
})
export class TableTasksMobileComponent {
  @Input() tasks: TTask[] | undefined = [];

  displayedColumns: string[] = ['name', 'hour']
  dataSource : ITaskElement[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['tasks']) this.updateDataSource();
  }

  private updateDataSource(): void {
    this.dataSource = this.tasks ? this.tasks.map(task => ({
      name: task.name,
      hour: task.hour,
    })) : [];
  }
}
