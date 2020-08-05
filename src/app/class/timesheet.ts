export class Timesheet {
  id: number;
  attivita: string;

  static create(t: Timesheet): Timesheet{
    const time = new Timesheet();
    time.id = t.id;
    time.attivita = t.attivita;
    return time;
  }
}
