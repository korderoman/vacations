import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITableComplexData, ITableComplexHeader } from './common/interfaces';

@Component({
  selector: 'ntt-data-table-complex',
  templateUrl: './table-complex.component.html',
  styleUrls: ['./table-complex.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule],
  standalone: true,
})
export class TableComplexComponent<T extends object> implements OnInit {
  @Input() dataTable!: ITableComplexData<T>;
  public headers: Array<ITableComplexHeader<T>>;
  public body: Array<Array<string>>;
  public constructor() {
    this.headers = [];
    this.body = [];
  }

  public ngOnInit(): void {
    this.headers = this.dataTable.headers ?? [];
    this.body = this.solveBody();
  }

  private solveBody(): Array<Array<string>> {
    if (this.dataTable.body) {
      return this.dataTable.body.map((row: T) => {
        if (this.solveBodyIsObject(row)) {
          const keys: Array<string> = Object.keys(row);
          return keys.map((key: string) => {
            return row[key as keyof T] as string;
          });
        }
        return [];
      });
    }
    return [];
  }
  private solveBodyIsObject<T extends object>(row: T): row is object & T {
    return typeof row === 'object' && row !== null && !Array.isArray(row);
  }
}
