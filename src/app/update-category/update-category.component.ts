import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Categories } from '../interfaces/categories';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss'],
})
export class UpdateCategoryComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private categoriesService: CategoriesService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      action: 'add' | 'update';
      categoryData: Categories;
    }
  ) {}

  categoryForm = this.fb.group({
    name: [null, Validators.required],
  });

  ngOnInit(): void {
    if (this.data.action === 'update') {
      this.categoryForm.get('name')?.setValue(this.data.categoryData.name);
    }
  }

  saveCategory(): void {
    const { name } = this.categoryForm.value;
    this.categoriesService
      .updateCategory(
        name,
        window.Clerk.user?.id as string,
        this.data.categoryData?.id ?? undefined
      )
      .subscribe(() => {
        this._snackBar.open('Category updated!', undefined, {
          horizontalPosition: 'end',
          verticalPosition: 'bottom',
          duration: 3000,
        });
      });
  }
}
