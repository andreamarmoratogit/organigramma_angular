import { Dipendente } from './dipendente';
import { Ruolo } from './ruolo';

export class UnitaPadre {
  id: number;
  nome: string;
  listDip: Dipendente[];
  ruoli: Ruolo[];
  figli: UnitaPadre[] ;

  constructor(){
    this.id = -1;
    this.nome = 'null';
    this.listDip = new Array<Dipendente>();
    this.ruoli = new Array<Ruolo>();
    this.figli = new Array<UnitaPadre>();
  }

  static create(u: UnitaPadre): UnitaPadre{
    const unita = new UnitaPadre();
    unita.id = u.id;
    unita.nome = u.nome;

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

  toString(){
    console.log( `unita: ${this.id} ${this.nome} `);
    for (const i of this.listDip){
      console.log(i.toString());
    }
    for (const i of this.ruoli){
      console.log(i.toString());
    }
    for (const i of this.figli){
      console.log(i.toString());
    }
  }
}
