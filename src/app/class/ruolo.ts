export class Ruolo {
  nome: string;

  constructor(){
    this.nome = '';
  }
  // Factory method
  static create(r: Ruolo): Ruolo{
    const ruolo = new Ruolo();
    ruolo.nome = r.nome;
    return ruolo;
  }

  toString(): string{
    return this.nome;
  }
}
