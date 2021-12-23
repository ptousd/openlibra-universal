import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryDTO } from 'src/app/model/category.dto';
import { OpenlibraService } from 'src/app/services/openlibra.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  categories: CategoryDTO[] = [];
  loaded: boolean;

  constructor(
    private router: Router,
    private openlibraService: OpenlibraService
  ) {
    this.loaded = false;
    this.openlibraService
      .getCategories()
      .subscribe((categories: CategoryDTO[]) => {
        this.loaded = true;
        this.categories = categories;
      });
  }

  ngOnInit(): void {}

  showNewest() {
    this.router.navigateByUrl('/newest');
  }

  showByCategory(nicename: string, name: string) {
    this.router.navigateByUrl('/home/' + nicename + '/' + name);
  }
}
