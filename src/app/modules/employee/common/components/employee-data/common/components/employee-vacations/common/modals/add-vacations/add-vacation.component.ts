import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../../../../../../../../../../common/providers/services/modal.service';
import { AddVacationPresenter } from './add-vacation.presenter';
import { IAddVacation } from '../../interfaces';

@Component({
  selector: 'ntt-add-vacation',
  templateUrl: './add-vacation.component.html',
  styleUrls: ['./add-vacation.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, ReactiveFormsModule],
  providers: [AddVacationPresenter],
  standalone: true,
})
export class AddVacationComponent {
  @Output() addVacation: EventEmitter<Partial<IAddVacation>>;
  public constructor(
    private modalService: ModalService,
    public readonly addVacationPresenter: AddVacationPresenter,
  ) {
    this.addVacation = new EventEmitter<Partial<IAddVacation>>();
  }
  onClose(): void {
    this.modalService.close();
  }

  public onSubmit(): void {
    this.addVacation.emit(this.addVacationPresenter.form.value);
    this.onClose();
  }
}
