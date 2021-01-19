import { Component, OnInit } from '@angular/core';
import {DataHendlerService} from '../../service/data-hendler.service';
// @ts-ignore
import {Task} from '../model/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  constructor(private dataHendler: DataHendlerService) { }

  ngOnInit(): void {
    this.tasks = this.dataHendler.getTasks();
  }

}
