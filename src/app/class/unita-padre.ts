import { Dipendente } from './dipendente';
import { Ruolo } from './ruolo';

export class UnitaPadre {
  id: number;
  nome: string;
  listDip: Dipendente[];
  ruoli: Ruolo[];
  figli: UnitaPadre[] ;
  temp: UnitaPadre;

  constructor(b: boolean){
    this.id = -1;
    this.nome = 'null';
    this.listDip = new Array<Dipendente>();
    this.ruoli = new Array<Ruolo>();
    this.figli = new Array<UnitaPadre>();
    if (b){this.temp = null; }
    else{this.temp = new UnitaPadre(true); }
  }

  create(u: UnitaPadre){
    this.id = u.id;
    this.nome = u.nome;
    this.ruoli = new Array<Ruolo>(u.ruoli.length);
    for (let i = 0; i < u.ruoli.length; i++){
      this.ruoli[i] = new Ruolo(u.ruoli[i]);
    }

    this.listDip = new Array<Dipendente>(this.listDip.length);
    for (let i = 0; i < u.listDip.length; i++){
      this.listDip[i] = new Dipendente();
      this.listDip[i].create(u.listDip[i]);
    }

    this.figli = new Array<UnitaPadre>(u.figli.length);
    for (let i = 0; i < u.figli.length; i++){
      this.figli[i] = new UnitaPadre(true);
      this.figli[i].create(u.figli[i]);
    }
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
