import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import {
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
} from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-storage-guidelines-dialog',
  templateUrl: './storage-guidelines-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatButton, TranslatePipe],
})
export class StorageGuidelinesDialogComponent {
  dialogRef = inject<MatDialogRef<StorageGuidelinesDialogComponent>>(MatDialogRef);

  onNoClick(): void {
    this.dialogRef.close();
  }
}
