import { UnitaPadre } from './unita-padre';

export class Organigramma {
  id: number;
  nome: string;
  unita: UnitaPadre;

  constructor(){
    this.id = -1;
    this.nome = '';
    this.unita = new UnitaPadre();
  }
// factory method
  static create(o: Organigramma): Organigramma{
    const org = new Organigramma();
    org.id = o.id;
    org.nome = o.nome;
    org.unita = UnitaPadre.create(o.unita );
    return org;
  }
  toString(): string{
    return `organigramma:${this.id} ${this.nome}`;
  }
}
