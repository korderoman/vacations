import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITableComplexData } from './common/interfaces';
import { IDashboardUser } from '../../../modules/dashboard/common/interfaces';
import { ExportExcelService } from '../../providers/services/export-excel.service';

@Component({
  selector: 'ntt-data-table-complex',
  templateUrl: './table-complex.component.html',
  styleUrls: ['./table-complex.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ExportExcelService],
  imports: [CommonModule],
  standalone: true,
})
export class TableComplexComponent {
  @Input() dataTable!: ITableComplexData<IDashboardUser>;
  public constructor(private readonly exportExcelService: ExportExcelService) {}

  /*private solveBodyIsObject<T extends object>(row: T): row is object & T {
    return typeof row === 'object' && row !== null && !Array.isArray(row);
  }*/
  public onExportToExcelFile() {
    if (this.dataTable.body.length > 0) {
      this.exportExcelService.solveExportAndDownloadExcelFileFromDashBoard(this.dataTable.body, 'Reporte');
    }
  }
}
