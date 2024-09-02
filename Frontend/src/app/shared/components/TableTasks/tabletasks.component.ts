import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TTask } from '../../types/SharedTypes';

export interface ITaskElement {
  name: string;
  hour: Date;
  actions: string
}

@Component({
  selector: 'app-tabletasks',
  templateUrl: './tabletasks.component.html',
  styleUrls: ['./tabletasks.component.scss']
})


export class TableTasksComponent implements OnChanges {
  @Input() tasks: TTask[] | undefined = [];

  displayedColumns: string[] = ['name', 'hour', 'actions']
  dataSource : ITaskElement[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['tasks']) this.updateDataSource();
  }

  private updateDataSource(): void {
    this.dataSource = this.tasks ? this.tasks.map(task => ({
      name: task.name,
      hour: task.hour,
      actions: ''
    })) : [];
  }
}
