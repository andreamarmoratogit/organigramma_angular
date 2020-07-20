import { Component, OnInit, Input } from '@angular/core';
import { Dipendente } from 'src/app/class/dipendente';


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
  colonne: string[] = ['id', 'nome', 'congome', 'ruolo'];
  constructor() { }

  ngOnInit(): void {
  }

}
