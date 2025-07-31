import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styles: [
    `
      .interactive-icon {
        cursor: pointer;
        transition: transform 0.2s;
      }
      .interactive-icon:hover {
        transform: scale(1.1);
      }
    `,
  ],
  styleUrls: ['./tooltip.component.css'],
  standalone: false,
})
export class TooltipComponent {
  @Input() tooltip: string;
  @Input() iconType: 'info' | 'warning' = 'info';
}
