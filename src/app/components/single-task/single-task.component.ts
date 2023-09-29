import { Component, Input } from '@angular/core';
import { Task } from './single-task.model';

@Component({
  	selector: 'app-single-task',
  	templateUrl: './single-task.component.html',
  	styleUrls: ['./single-task.component.scss']
})
export class SingleTaskComponent {
	@Input() task: Task | undefined;
  	constructor() {};
}
