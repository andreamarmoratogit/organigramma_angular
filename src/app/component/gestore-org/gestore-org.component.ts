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
    { this.org.create(ret),
      this.unitaRadice = this.org.unita; });
  }

  aggiungiRuolo(s: string){
    this.orgService.aggRuolo(this.org.id, this.unita.id, s).subscribe((ret: Organigramma) =>
    { this.org.create(ret),
      this.unitaRadice = this.org.unita; });
  }

  aggiungiDip(s: string[]){
    this.orgService.aggDip(this.org.id, this.unita.id, s[0], s[1], s[2]).subscribe((ret: Organigramma) =>
    { this.org.create(ret),
      this.unitaRadice = this.org.unita; });
  }

  reload(){
    this.router.routeReuseStrategy.shouldReuseRoute = function f() {return false; };
    this.router.navigate(['organigramma']);
  }

  selected(unitaSel: UnitaPadre){
    this.unita = unitaSel;
  }

}
