import { Component, OnInit, OnChanges } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';
import { UnitaPadre } from 'src/app/class/unita-padre';
import { Organigramma } from 'src/app/class/organigramma';
import { Router } from '@angular/router';
import { OrganigrammaService } from 'src/app/service/organigramma.service';
@Component({
  selector: 'app-gestore-org',
  templateUrl: './gestore-org.component.html',
  styleUrls: ['./gestore-org.component.css']
})
export class GestoreOrgComponent implements OnInit {
  org: Organigramma;
  unitaRadice: UnitaPadre;
  unita: UnitaPadre;
  cont = 0;
  constructor(private homeService: HomeService, private orgService: OrganigrammaService, private router: Router) {
    this.homeService.orgObs.subscribe(o => this.org = o);
    this.unitaRadice = this.org.unita;
  }

  ngOnInit(): void {}

  home(){
    this.router.navigate(['']);
  }

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
    this.orgService.rimUnita(this.org.id, this.unita.id).subscribe((ret: Organigramma) =>
    { this.ricarica(ret); });
  }

  rimuoviDip(id: string){
    this.orgService.rimDip(this.org.id, this.unita.id , id).subscribe((ret: Organigramma) =>
    { this.ricarica(ret); });
  }

  rimuoviRuolo(nome: string){
    this.orgService.rimRuolo(this.org.id, this.unita.id, nome).subscribe((ret: Organigramma) =>
    { this.ricarica(ret); });
  }

 /* reload(){
    this.router.routeReuseStrategy.shouldReuseRoute = function f() {return false; };
    this.router.navigate(['organigramma']);
  }*/

  selected(unitaSel: UnitaPadre){
    this.unita = unitaSel;
  }

  ricarica(o: Organigramma){
    this.org = Organigramma.create(o);
    this.unitaRadice = this.org.unita;
  }


}
