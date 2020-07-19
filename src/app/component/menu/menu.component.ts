import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { UnitaPadre } from 'src/app/class/unita-padre';
import { OrganigrammaService } from 'src/app/service/organigramma.service';
import { Router } from '@angular/router';
import { Organigramma } from 'src/app/class/organigramma';
import { HomeService } from 'src/app/service/home.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output()aggU = new EventEmitter<string[]>();
  @Output()aggR = new EventEmitter<string>();
  @Output()aggD = new EventEmitter<string[]>();
  @Input()unitaSel: UnitaPadre;
  aggUnita = false;
  rimuovi = false;
  aggDip = false;
  aggRuolo = false;
  nome: string;
  cognome: string;
  tipo: string;
  ruolo: string;
  constructor(private homeService: HomeService, private orgService: OrganigrammaService, private router: Router) {
  }

  ngOnChanges(change: SimpleChanges): void{
    console.log('ok');
  }

  ngOnInit(): void {
  }

  sendAggU(){
    this.aggU.emit([this.tipo, this.nome]);
  }
  sendAggR(){
    this.aggR.emit(this.nome);
  }
  sendAggD(){
    this.aggD.emit([this.nome, this.cognome, this.ruolo]);
  }


}
