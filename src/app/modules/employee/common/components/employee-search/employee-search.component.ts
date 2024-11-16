import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmployeeSearchPresenter } from './employee-search.presenter';
import { IEmployeeSearch } from './common/interfaces';

@Component({
  selector: 'ntt-data-employee-search-ui',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.scss'],
  providers: [EmployeeSearchPresenter],
})
export class EmployeeSearchComponent {
  @Output() public search: EventEmitter<Partial<IEmployeeSearch>>;
  @Input() public isLoading!: boolean;
  public constructor(public readonly employeeSearchPresenter: EmployeeSearchPresenter) {
    this.search = new EventEmitter<Partial<IEmployeeSearch>>();
  }

  public onSearch(): void {
    this.search.emit(this.employeeSearchPresenter.form.value);
  }
}
