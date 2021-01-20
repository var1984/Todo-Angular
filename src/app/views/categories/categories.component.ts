import {Component, OnInit} from '@angular/core';
import {DataHendlerService} from '../../service/data-hendler.service';
import {Category} from '../../model/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];

  constructor(private dataHendler: DataHendlerService) {

  }

// метод вызывается автоматически после инициализации компонента
  ngOnInit() {
    this.dataHendler.categoriesSubject.subscribe(categories => this.categories = categories);
  }
  // tslint:disable-next-line:typedef
  showTasksByCategory(category: Category){
  this.dataHendler.fillTasksByCategory(category);
  }
}
