import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IdeaUpdateComponent } from '../idea-update/idea-update.component';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss'],
})
export class IdeasComponent {
  constructor(public dialog: MatDialog) {}
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  addIdea(): void {
    const dialogRef = this.dialog.open(IdeaUpdateComponent, {
      data: {
        action: 'add',
      },
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
