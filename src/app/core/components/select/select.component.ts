import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SelectComponent {
  public selectedValue!: string;

  @Input() arrValue!: any;
  @Input() label!: string;

  @Output() sortByTen: EventEmitter<string> = new EventEmitter<string>();
  @Output() sortByFive: EventEmitter<string> = new EventEmitter<string>();
  @Output() sortByTwo: EventEmitter<string> = new EventEmitter<string>();
  @Output() searchByBreeds: EventEmitter<string> = new EventEmitter<string>();

  public sortBy(): void {
    if (this.selectedValue === 'sortByTen'){
      this.sortByTen.emit();
    } else if (this.selectedValue === 'sortByFive'){
      this.sortByFive.emit();
    } else if (this.selectedValue === 'sortByTwo'){
      this.sortByTwo.emit();
    } else if (this.selectedValue === this.selectedValue) {
      this.searchByBreeds.emit(this.selectedValue)
    }
  }
}
