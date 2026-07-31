import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-storage-guidelines-dialog',
  templateUrl: './storage-guidelines-dialog.component.html',
  standalone: false,
})
export class StorageGuidelinesDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<StorageGuidelinesDialogComponent>,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
