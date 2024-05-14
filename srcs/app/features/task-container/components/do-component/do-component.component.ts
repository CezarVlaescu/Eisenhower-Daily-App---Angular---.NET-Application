import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DoPool, NewTask } from '../../../../shared/types/tasksType';

@Component({
  selector: 'app-do-component',
  templateUrl: './do-component.component.html',
  styleUrls: ['./do-component.component.scss']
})
export class DoComponentComponent implements OnInit, OnChanges {
  @Input() doPool: DoPool = { tasks : []};
  doTasks : NewTask[] = [];

  constructor(){}

  ngOnInit() {
    this.updateDoTasks();
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes['pool']) this.updateDoTasks();
  }

  private updateDoTasks(){
    this.doTasks = this.doPool.tasks;
  }

}
