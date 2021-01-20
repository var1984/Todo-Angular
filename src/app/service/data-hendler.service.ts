import { Injectable } from '@angular/core';
import {Category} from '../model/Category';
import {TestData} from '../data/TestData';
import {Task} from '../model/Task';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHendlerService {
  tasksSubject = new BehaviorSubject<Task[]>(TestData.tasks);
  categoriesSubject = new BehaviorSubject<Category>(TestData.categories);
  constructor() {
    this.fillTasks();
  }

  // getCategories(): Category[]{
  //   return TestData.categories;
  // }
  fillTasks(){
    this.tasksSubject.next(TestData.tasks);
  }
  fillTasksByCategory(category: Category){
    const tasks = TestData.tasks.filter(task => task.category === category);
    this.tasksSubject.next(tasks);
  }
}

