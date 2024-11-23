import { FormArray, FormGroup } from '@angular/forms';
import { IEmployeeInfoForm } from '../components/employee-info/common/interfaces';
import { IAddVacationForm } from '../components/employee-vacations/common/interfaces';

export interface IEmployeeDataForm {
  employeeInfo?: FormGroup<IEmployeeInfoForm>;
  vacations?: FormArray<FormGroup<IAddVacationForm>>;
}
