import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITableComplexData } from './common/interfaces';
import { IDashboardUser } from '../../../modules/dashboard/common/interfaces';

@Component({
  selector: 'ntt-data-table-complex',
  templateUrl: './table-complex.component.html',
  styleUrls: ['./table-complex.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule],
  standalone: true,
})
export class TableComplexComponent {
  @Input() dataTable!: ITableComplexData<IDashboardUser>;
  public constructor() {}

  /*private solveBodyIsObject<T extends object>(row: T): row is object & T {
    return typeof row === 'object' && row !== null && !Array.isArray(row);
  }*/
}
