import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-idea-update',
  templateUrl: './idea-update.component.html',
  styleUrls: ['./idea-update.component.scss'],
})
export class IdeaUpdateComponent {
  public Editor = ClassicEditor;
  public statusOptions = [
    {
      label: 'Not Started',
      value: 'not_started',
    },
    {
      label: 'In Progress',
      value: 'in_progress',
    },
    {
      label: 'Completed',
      value: 'completed',
    },
  ];

  public visibilityOptions = [
    {
      label: 'Public',
      value: 'public',
    },
    {
      label: 'Private',
      value: 'private',
    },
    {
      label: 'Friends',
      value: 'friends',
    },
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { action: 'add' | 'update' },
    private fb: FormBuilder
  ) {}
  ideaForm = this.fb.group({
    name: [null, Validators.required],
    description: [null, Validators.required],
    status: ['not_started', Validators.required],
    target: [null, Validators.required],
    visibility: ['public', Validators.required],
  });
}
