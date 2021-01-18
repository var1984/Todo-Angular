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

// Метод створюється автоматично після створення компонента
  ngOnInit(): void {
    this.categories = this.dataHendler.getCategories();
    console.log(this.categories);
  }

}
