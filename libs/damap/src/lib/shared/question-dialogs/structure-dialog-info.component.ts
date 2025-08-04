import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-structure-dialog-info',
  templateUrl: './structure-dialog-info.component.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, TranslateModule],
})
export class StructureDialogInfoComponent {}
