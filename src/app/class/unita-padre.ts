import { Dipendente } from './dipendente';
import { Ruolo } from './ruolo';

export class UnitaPadre {
  id: number;
  nome: string;
  listDip: Dipendente[];
  ruoli: Ruolo[];
  figli: UnitaPadre[] ;
  tipo: string;

  constructor(){
    this.id = -1;
    this.nome = 'null';
    this.listDip = new Array<Dipendente>();
    this.ruoli = new Array<Ruolo>();
    this.figli = new Array<UnitaPadre>();
    this.tipo = '';
  }

  static create(u: UnitaPadre): UnitaPadre{
    const unita = new UnitaPadre();
    unita.id = u.id;
    unita.nome = u.nome;
    unita.tipo = u.tipo;

    unita.ruoli = new Array<Ruolo>(u.ruoli.length);
    for (let i = 0; i < u.ruoli.length; i++){
      unita.ruoli[i] = Ruolo.create(u.ruoli[i]);
    }

    unita.listDip = new Array<Dipendente>(u.listDip.length);
    for (let i = 0; i < u.listDip.length; i++){
      unita.listDip[i] = Dipendente.create(u.listDip[i]);
    }

    unita.figli = new Array<UnitaPadre>(u.figli.length);
    for (let i = 0; i < u.figli.length; i++){
      unita.figli[i] = UnitaPadre.create(u.figli[i]);
    }
    return unita;
  }

  toString(): string{
    return `unita: ${this.id} ${this.nome} ${this.tipo} `;
  }
}
