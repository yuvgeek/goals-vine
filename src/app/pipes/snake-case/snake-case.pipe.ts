import { TitleCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'snakeCase',
})
export class SnakeCasePipe implements PipeTransform {
  constructor(private titleCasePipe: TitleCasePipe) {}
  transform(value: string): string {
    return this.titleCasePipe.transform(value.replace('_', ' '));
  }
}
