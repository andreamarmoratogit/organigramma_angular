import { Component, OnInit, OnChanges } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';
import { UnitaPadre } from 'src/app/class/unita-padre';
import { Organigramma } from 'src/app/class/organigramma';
import { Router } from '@angular/router';
import { OrganigrammaService } from 'src/app/service/organigramma.service';
import { MatSnackBar } from '@angular/material/snack-bar';

// componente che contiene tutti i componenti della pagina /organigramma
// e si occupa di effettuare tutte le richieste al server
@Component({
  selector: 'app-gestore-org',
  templateUrl: './gestore-org.component.html',
  styleUrls: ['./gestore-org.component.css']
})
export class GestoreOrgComponent implements OnInit {
  org: Organigramma;
  unitaRadice: UnitaPadre;
  unita: UnitaPadre;
  constructor(private homeService: HomeService, private orgService: OrganigrammaService, private router: Router,
              private snackBar: MatSnackBar) {
    this.homeService.orgObs.subscribe(o => this.org = o);
    this.unitaRadice = this.org.unitaRadice;
  }

  ngOnInit(): void {}

  aggiungiUnita(s: string[]){
    console.log(this.unita.id + ' ' + s[0] + ' ' + s[1]);
    this.orgService.aggUnita(this.org.id, this.unita.id , s[0], s[1]).subscribe((ret: Organigramma) =>
    { this.ricarica(ret); });
  }

  aggiungiRuolo(s: string){
    this.orgService.aggRuolo(this.org.id, this.unita.id, s).subscribe((ret: Organigramma) =>
    { this.ricarica(ret); });
  }

  aggiungiDip(s: string[]){
    this.orgService.aggDip(this.org.id, this.unita.id, s[0], s[1], s[2]).subscribe((ret: Organigramma) =>
    { this.ricarica(ret); });
  }

  rimuoviUnita(){
    if (this.unita.id === this.org.id){this.eliminaOrg(); }
    else{
      this.orgService.rimUnita(this.org.id, this.unita.id).subscribe((ret: Organigramma) =>
      { this.ricarica(ret); });
    }
  }

  rimuoviDip(id: string){
    const intId = Number(id);
    if (isNaN(intId)){ // controlla che l'utente non abbia inserito una stringa
      this.errore('inserire un numero');
      return;
    }
    this.orgService.rimDip(this.org.id, this.unita.id , intId).subscribe(
      (ret: Organigramma) => { this.ricarica(ret); },
      err => this.errore(err.error)
    );
  }

  rimuoviRuolo(nome: string){
    this.orgService.rimRuolo(this.org.id, this.unita.id, nome).subscribe(
      (ret: Organigramma) => { this.ricarica(ret); },
      err => this.errore(err.error)
    );
  }

  eliminaOrg(){
    this.homeService.eliminaOrg(this.org.id).subscribe(
      res => this.router.navigate(['']) );
  }

  // metodo che viene chiamato quanto l'utente cambia unita selezionata
  selected(unitaSel: UnitaPadre){
    this.unita = unitaSel;
  }

  // aggiorna l'organigramma e l'unita radice per aggiornare il componente Albero
  ricarica(o: Organigramma){
    this.org = Organigramma.create(o);
    this.unitaRadice = this.org.unitaRadice;
  }

  // apre un messaggio di errore
  errore(err: string){
    this.snackBar.open(err, 'chiudi', { duration: 3000, } );
  }


}
