import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx'; // Biblioteca para manipular Excel
import * as FileSaver from 'file-saver';
import { IDashboardUser } from '../../../modules/dashboard/common/interfaces';
@Injectable()
export class ExportExcelService {
  public solveExportAndDownloadExcelFileFromDashBoard(data: Array<IDashboardUser>, fileName: string): void {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    // Crea un libro de trabajo (workbook)
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Datos');

    // Convierte el libro a un archivo Excel
    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

    // Llama al método para guardar el archivo
    this.guardarArchivo(excelBuffer, fileName);
  }
  private guardarArchivo(buffer: any, nombreArchivo: string): void {
    const data: Blob = new Blob([buffer], { type: 'application/octet-stream' });
    FileSaver.saveAs(data, `${nombreArchivo}.xlsx`);
  }
}
