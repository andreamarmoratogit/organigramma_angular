import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';
import { NestedTreeControl } from '@angular/cdk/tree';
import { UnitaPadre } from 'src/app/class/unita-padre';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { OrganigrammaService } from 'src/app/service/organigramma.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albero',
  templateUrl: './albero.component.html',
  styleUrls: ['./albero.component.css']
})
export class AlberoComponent implements OnInit {
  treeControl = new NestedTreeControl<UnitaPadre>( node => node.figli );
  dataSource = new MatTreeNestedDataSource<UnitaPadre>();
  unitaSelected: UnitaPadre;
  primaSelezione = true;
  @Output() menu = new EventEmitter();
  @Output() selected = new EventEmitter<UnitaPadre>();
  @Input() unitaRadice: UnitaPadre;
  @Input() cont = 0;


  constructor(private homeService: HomeService, private orgService: OrganigrammaService, private router: Router) {
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges): void{
    this.dataSource.data = [this.unitaRadice];
  }

  hasChild = ( _: number , node: UnitaPadre ) => !! node.figli && node.figli.length >= 0 ;

  ngOnInit(): void {
  }

  nodoSelezionato(u: UnitaPadre){
    this.selected.emit(u);
    if ( this.primaSelezione ) {
      this.menu.emit();
      this.primaSelezione = false;
    }


  }


}
