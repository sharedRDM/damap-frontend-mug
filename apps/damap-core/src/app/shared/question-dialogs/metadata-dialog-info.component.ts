import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-metadata-dialog-info',
  templateUrl: './metadata-dialog-info.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButton,
    TranslatePipe,
  ],
})
export class MetadataDialogInfoComponent {}
