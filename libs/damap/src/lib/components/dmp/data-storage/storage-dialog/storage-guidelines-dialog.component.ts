import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-storage-guidelines-dialog',
  templateUrl: './storage-guidelines-dialog.component.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, TranslateModule],
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
