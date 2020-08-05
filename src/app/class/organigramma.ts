import { UnitaPadre } from './unita-padre';

export class Organigramma {
  id: number;
  nome: string;
  unitaRadice: UnitaPadre;

  constructor(){
    this.id = -1;
    this.nome = '';
    this.unitaRadice = new UnitaPadre();
  }
// factory method
  static create(o: Organigramma): Organigramma{
    const org = new Organigramma();
    org.id = o.id;
    org.nome = o.nome;
    org.unitaRadice = UnitaPadre.create(o.unitaRadice );
    return org;
  }
  toString(): string{
    return `organigramma:${this.id} ${this.nome}`;
  }
}
