import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnakeCasePipe } from './snake-case.pipe';

@NgModule({
  declarations: [SnakeCasePipe],
  imports: [CommonModule],
  exports: [SnakeCasePipe],
})
export class SnakeCaseModule {}
