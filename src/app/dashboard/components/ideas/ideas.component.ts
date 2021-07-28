import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import groupBy from 'lodash/groupBy';
import { Observable } from 'rxjs';
import { Idea } from 'src/app/interfaces/ideas';
import { IdeasService } from 'src/app/services/ideas.service';
import { IdeaUpdateComponent } from '../idea-update/idea-update.component';
@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss'],
  providers: [TitleCasePipe],
})
export class IdeasComponent implements OnInit {
  constructor(public dialog: MatDialog, public ideasService: IdeasService) {}
  todo = [];
  ideas$ = new Observable<any>();
  ideas!: { key: string; value: Idea[] }[];

  ngOnInit() {
    // this.ideas$ =
    this.ideasService.getIdeas().subscribe((res) => {
      const groupedData = groupBy(res, 'status');
      this.ideas = Object.keys(groupedData).map((key) => ({
        key,
        value: groupedData[key] ?? [],
      }));
      console.log(this.ideas);
    });
  }

  addIdea(): void {
    const dialogRef = this.dialog.open(IdeaUpdateComponent, {
      data: {
        action: 'add',
      },
    });
  }

  drop(event: CdkDragDrop<Idea[]>) {
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
    console.log(this.ideas);
  }
}
