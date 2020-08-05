import { Dipendente } from './dipendente';
import { Timesheet } from './timesheet';

export class Project {
  id: number;
  dip: Dipendente;
  titolo: string;
  descrizione: string;
  timesheet: Timesheet[];

  static create(p: Project): Project{
    const proj = new Project();
    proj.id = p.id;
    proj.dip = Dipendente.create(p.dip);
    proj.titolo = p.titolo;
    proj.descrizione = p.descrizione;
    proj.timesheet = new Array<Timesheet>(p.timesheet.length);
    for (let i = 0; i < p.timesheet.length; i++){
      proj.timesheet[i] = Timesheet.create(p.timesheet[i]);
    }
    return proj;
  }
}
