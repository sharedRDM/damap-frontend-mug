// CUSTOMIZATION MUG START
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
  selector: 'app-legal-aspects-dialog-info',
  templateUrl: './legal-aspects-dialog-info.component.html',
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
export class LegalAspectsDialogInfoComponent {}
// CUSTOMIZATION MUG END
