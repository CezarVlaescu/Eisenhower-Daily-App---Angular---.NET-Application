import { Component, Input, OnInit } from '@angular/core';
import { DelegatePool, NewTask } from '../../types/taskType';

@Component({
  selector: 'app-delegate-component',
  templateUrl: './delegate-component.component.html',
  styleUrls: ['./delegate-component.component.scss']
})
export class DelegateComponentComponent implements OnInit {
  
  @Input() delegatePool: DelegatePool = { tasks: [] };
  delegateTasks: NewTask[] = [];

  ngOnInit(): void {
    this.updateDelegateTask();
  }
  
  private updateDelegateTask() : void {
    this.delegateTasks = this.delegatePool.tasks;
  }
}
