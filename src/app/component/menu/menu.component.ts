import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { UnitaPadre } from 'src/app/class/unita-padre';
import { OrganigrammaService } from 'src/app/service/organigramma.service';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/service/home.service';

// componente che si occupa del menu laterale e tiene traccia dei dati inseriti dall'utente
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output()aggU = new EventEmitter<string[]>();
  @Output()rimU = new EventEmitter();
  @Output()aggR = new EventEmitter<string>();
  @Output()rimR = new EventEmitter<string>();
  @Output()aggD = new EventEmitter<string[]>();
  @Output()rimD = new EventEmitter<string>();
  @Output()elO = new EventEmitter();
  @Input()unitaSel: UnitaPadre;
  aggUnita = false;
  rimUnita = false;
  aggDip = false;
  rimDip = false;
  aggRuolo = false;
  rimRuolo = false;
  elOrg = false;
  nome: string;
  cognome: string;
  tipo: string;
  ruolo: string;
  constructor(private homeService: HomeService, private orgService: OrganigrammaService, private router: Router) {
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges(change: SimpleChanges): void{
    this.nome = '';
    this.cognome = '';
    this.tipo = '';
    this.ruolo = '';
  }
  ngOnInit(): void {
  }

  sendAggU(){
    this.aggU.emit([this.tipo, this.nome]);
  }
  sendRimU(){
    this.rimU.emit();
  }
  sendAggR(){
    this.aggR.emit(this.nome);
  }
  sendRimR(){
    this.rimR.emit(this.nome);
  }
  sendAggD(){
    this.aggD.emit([this.nome, this.cognome, this.ruolo]);
  }
  sendRimD(){
    this.rimD.emit(this.nome);
  }
  eliminaOrg(){
    this.elO.emit();
  }


}
