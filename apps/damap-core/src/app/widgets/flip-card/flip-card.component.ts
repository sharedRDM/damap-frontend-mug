import { Component, Input, inject, ChangeDetectionStrategy, input } from '@angular/core';

import { Router } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [MatIcon],
})
export class FlipCardComponent {
  private router = inject(Router);

  readonly frontContent = input<string>(undefined);
  readonly backContent = input<string>(undefined);
  @Input() navigateRoute: string;
  // CUSTOMIZATION MUG START
  @Input() relinkUrl?: string;
  // CUSTOMIZATION MUG END
  @Input() iconCard: string;

  navigateTo() {
    if (this.navigateRoute) {
      this.router.navigate([this.navigateRoute]);
    } // CUSTOMIZATION MUG START
    else if (this.relinkUrl) {
      window.open(this.relinkUrl, '_blank');
    }
    // CUSTOMIZATION MUG END
  }

  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      this.navigateTo();
      event.preventDefault();
    }
  }
}
