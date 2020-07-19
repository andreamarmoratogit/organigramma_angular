export class Dipendente {
  id: number;
  nome: string;
  cognome: string;
  ruolo: string;

  create(d: Dipendente){
    this.id = d.id;
    this.nome = d.nome;
    this.cognome = d.cognome;
    this.ruolo = d.ruolo;
  }

  toString(): string {
    return `dipendente: ${this.id} ${this.nome} ${this.cognome} ${this.ruolo} `;
  }
}
