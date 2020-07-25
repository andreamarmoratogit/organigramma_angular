import { Ruolo } from './ruolo';

export class Dipendente {
  id: number;
  nome: string;
  cognome: string;
  ruolo: Ruolo;

  constructor(){
    this.id = -1;
    this.nome = '';
    this.cognome = '';
    this.ruolo = new Ruolo();
  }
  // Factory method
  static create(d: Dipendente): Dipendente{
    const dip = new Dipendente();
    dip.id = d.id;
    dip.nome = d.nome;
    dip.cognome = d.cognome;
    dip.ruolo = Ruolo.create(d.ruolo);
    return dip;
  }

  toString(): string {
    return `dipendente: ${this.id} ${this.nome} ${this.cognome} ${this.ruolo} `;
  }
}
