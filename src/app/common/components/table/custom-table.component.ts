import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ntt-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
})
export class CustomTableComponent {
  @Input() columns!: Array<string>;
  @Input() rows!: Array<Array<string>>;
  @Output() addVacation: EventEmitter<void>;

  public constructor() {
    this.addVacation = new EventEmitter<void>();
  }

  public onAddVacation(): void {
    this.addVacation.emit();
  }
}
