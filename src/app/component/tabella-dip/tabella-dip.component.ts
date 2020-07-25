import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Dipendente } from 'src/app/class/dipendente';

// componente che si occupa di visualizzare le tabelle contenenti i dipendenti di ogni unita
@Component({
  selector: 'app-tabella-dip',
  templateUrl: './tabella-dip.component.html',
  styleUrls: ['./tabella-dip.component.css']
})
export class TabellaDipComponent implements OnInit {
  @Input()
  listDip: Dipendente[] = [];
  @Input()
  listRuoli: string[] = [];
  @Input()
  titolo = 'null';
  @Input()
  tipo = '';
  colonne: string[] = ['id', 'nome', 'congome', 'ruolo'];
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges){}

}
