import { Unita } from './unita';
import { UnitaPadre } from './unita-padre';

export class Organigramma {
  id: number;
  nome: string;
  unita: UnitaPadre;

  constructor(){
    this.id = -1;
    this.nome = '';
    this.unita = new UnitaPadre(false);
  }

  create(o: Organigramma){
    this.id = o.id;
    this.nome = o.nome;
    this.unita.create((o.unita ));
  }
  toString(): string{
    return `organigramma:${this.id} ${this.nome}`;
  }
}
