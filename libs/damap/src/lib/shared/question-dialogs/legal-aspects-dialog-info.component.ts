import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-legal-aspects-dialog-info',
  templateUrl: './legal-aspects-dialog-info.component.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, TranslateModule],
})
export class LegalAspectsDialogInfoComponent {}
