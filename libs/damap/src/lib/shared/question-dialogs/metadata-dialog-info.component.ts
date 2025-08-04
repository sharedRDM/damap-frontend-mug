import { NgForOf, NgIf } from '@angular/common';

import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'metadata-dialog-info',
  templateUrl: './metadata-dialog-info.component.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, TranslateModule, NgForOf, NgIf],
})
export class MetadataDialogInfoComponent {}
