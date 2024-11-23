import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IAddVacation } from './common/interfaces';
import { EmployeeVacationsPresenter } from './employee-vacations.presenter';

@Component({
  selector: 'ntt-data-employee-vacations-ui',
  templateUrl: './employee-vacations.component.html',
  providers: [EmployeeVacationsPresenter],
})
export class EmployeeVacationsComponent implements OnInit, OnChanges {
  @Input() public headers!: Array<string>;
  @Input() public rows!: Array<Array<string>>;
  @Input() public model!: Array<Partial<IAddVacation>>;
  @Output() public addVacation: EventEmitter<void>;

  public constructor(private readonly employeeVacationsPresenter: EmployeeVacationsPresenter) {
    this.addVacation = new EventEmitter<void>();
  }

  public onAddVacation(): void {
    this.addVacation.emit();
  }

  public ngOnInit(): void {
    this.employeeVacationsPresenter.updateValues(this.model);
  }

  public ngOnChanges(simpleChanges: SimpleChanges): void {
    if (simpleChanges['model']) {
      this.employeeVacationsPresenter.updateValues(this.model);
    }
  }
}
