import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { StorageGuidelinesDialogComponent } from './storage-guidelines-dialog.component';
import { TooltipComponent } from '../../../../widgets/tooltip/tooltip.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [StorageGuidelinesDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    TranslateModule,
  ],
  exports: [StorageGuidelinesDialogComponent],
})
export class StorageGuidelinesDialogModule {}
