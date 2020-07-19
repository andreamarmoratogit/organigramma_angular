export class Ruolo {
  nome: string;
  constructor(ruolo: Ruolo){
    this.nome = ruolo.nome;
  }

  toString(): string{
    return this.nome;
  }
}
