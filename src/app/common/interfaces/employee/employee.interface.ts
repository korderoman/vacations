import { IVacations } from './vacations.interface';

export interface IEmployee {
  apellidos: string;
  nombres: string;
  dni: string;
  ingreso: string;
  lt: string;
  perfil: string;
  scrum_master: string;
  squad: string;
  vacaciones: IVacations | null;
}
