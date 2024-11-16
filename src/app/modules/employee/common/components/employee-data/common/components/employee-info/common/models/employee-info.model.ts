import { IEmployeeInfo } from '../interfaces';
import { IEmployee } from '../../../../../../../../../../common/interfaces';

export class EmployeeInfoModel implements IEmployeeInfo {
  public apellidos: string | null;
  public dni: string | null;
  public ingreso: string | null;
  public lt: string | null;
  public perfil: string | null;
  public scrum_master: string | null;
  public nombres: string | null;
  public squad: string | null;

  public constructor(employee: IEmployee | null) {
    this.apellidos = this.solveApellidos(employee);
    this.dni = this.solveDni(employee);
    this.ingreso = this.solveIngreso(employee);
    this.lt = this.solveLt(employee);
    this.perfil = this.solvePerfil(employee);
    this.scrum_master = this.solveScrumMaster(employee);
    this.nombres = this.solveNombres(employee);
    this.squad = this.solveSquad(employee);
  }

  private solveApellidos(employee: IEmployee | null): string | null {
    return employee?.apellidos || null;
  }

  private solveDni(employee: IEmployee | null): string | null {
    return employee?.dni || null;
  }

  private solveIngreso(employee: IEmployee | null): string | null {
    return employee?.ingreso || null;
  }

  private solveLt(employee: IEmployee | null): string | null {
    return employee?.lt || null;
  }

  private solvePerfil(employee: IEmployee | null): string | null {
    return employee?.perfil || null;
  }

  private solveScrumMaster(employee: IEmployee | null): string | null {
    return employee?.scrum_master || null;
  }
  private solveNombres(employee: IEmployee | null): string | null {
    return employee?.nombres || null;
  }
  private solveSquad(employee: IEmployee | null): string | null {
    return employee?.squad || null;
  }
}
