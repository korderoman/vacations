import { Component, ComponentRef, Input, OnInit } from '@angular/core';
import { IVacations } from '../../../../../../../../common/interfaces';
import { EmployeeVacationsAdapter } from './common/providers/adapters/employee-vacations.adapter';
import { ModalService } from '../../../../../../../../common/providers/services/modal.service';
import { AddVacationComponent } from './common/modals/add-vacations/add-vacation.component';
import { IAddVacation } from './common/interfaces';

@Component({
  selector: 'ntt-data-employee-vacations',
  templateUrl: './employee-vacations.container.html',
  providers: [EmployeeVacationsAdapter],
})
export class EmployeeVacationsContainer implements OnInit {
  @Input() public vacations!: IVacations | null;
  public headers: Array<string>;
  public rows: Array<Array<string>>;
  public model: Array<Partial<IAddVacation>>;
  public constructor(
    private readonly modalService: ModalService,
    private readonly employeeVacationsAdapter: EmployeeVacationsAdapter,
  ) {
    this.headers = this.employeeVacationsAdapter.solveDataHeader();
    this.rows = [];
    this.model = [];
  }

  public ngOnInit(): void {
    this.solveRows();
    this.solveUpdateModelInOnInit();
  }

  private solveRows(): void {
    if (this.vacations) {
      this.rows = this.employeeVacationsAdapter.solveDataBody(this.vacations);
    }
  }

  private solveUpdateModelInOnInit(): void {
    this.model = this.employeeVacationsAdapter.solveUpdateModelInOnInit(this.vacations);
  }
  public onAddVacation(): void {
    const componentRef: ComponentRef<AddVacationComponent> = this.modalService.open(AddVacationComponent);
    componentRef.instance.addVacation.subscribe((data: Partial<IAddVacation>) => this.solveAddVacation(data));
  }

  private solveAddVacation(data: Partial<IAddVacation>): void {
    this.rows = this.employeeVacationsAdapter.addVacation(data, this.rows);
    this.model = [...this.model, data];
  }
}
