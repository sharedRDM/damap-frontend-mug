import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-legal-aspects-dialog-info',
  templateUrl: './legal-aspects-dialog-info.component.html',
  imports: [MatDialogModule, MatButtonModule, TranslatePipe],
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class LegalAspectsDialogInfoComponent {}
