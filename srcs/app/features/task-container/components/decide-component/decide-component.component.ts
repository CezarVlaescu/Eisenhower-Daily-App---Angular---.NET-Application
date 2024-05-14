import { Component, Input, OnInit } from '@angular/core';
import { DecidePool, NewTask } from '../../../../shared/types/tasksType';

@Component({
  selector: 'app-decide-component',
  templateUrl: './decide-component.component.html',
  styleUrls: ['./decide-component.component.scss']
})
export class DecideComponentComponent implements OnInit {
  
  @Input() decidePool : DecidePool = { tasks: []}
  decideTasks : NewTask[] = [];

  ngOnInit(): void {
    this.updateDecideTasks();
  }

  private updateDecideTasks() : void{
    this.decideTasks = this.decidePool.tasks;
  }
 
}
