import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Categories } from '../interfaces/categories';
import { CategoriesService } from '../services/categories.service';
import { UpdateCategoryComponent } from '../update-category/update-category.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'action'];
  dataSource$ = new Observable<any>();
  isLoading: boolean = true;
  constructor(
    private categoriesService: CategoriesService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.dataSource$ = this.categoriesService.refreshCategories$.pipe(
      switchMap(() =>
        this.categoriesService.getCategories(window.Clerk.user?.id as string)
      ),
      tap(() => (this.isLoading = false))
    );
  }

  addCategory(): void {
    this.dialog.open(UpdateCategoryComponent, {
      data: {
        action: 'add',
      },
    });
  }

  editCategory(category: Categories): void {
    this.dialog.open(UpdateCategoryComponent, {
      data: {
        action: 'update',
        categoryData: category,
      },
    });
  }
}
