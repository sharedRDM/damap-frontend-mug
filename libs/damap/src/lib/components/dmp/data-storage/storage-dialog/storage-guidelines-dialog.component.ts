import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-storage-guidelines-dialog',
  templateUrl: './storage-guidelines-dialog.component.html',
  standalone: false,
})
export class StorageGuidelinesDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<StorageGuidelinesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
