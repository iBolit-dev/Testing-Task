import {ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BtnComponent {
  @Input() textBtn!: string;
  @Input() colorBtn!: string;
}
