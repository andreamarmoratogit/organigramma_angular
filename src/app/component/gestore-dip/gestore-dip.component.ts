import { Component, OnInit } from '@angular/core';
import { Dipendente } from 'src/app/class/dipendente';
import { DipServiceService } from 'src/app/service/dip-service.service';
import { Project } from 'src/app/class/project';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-gestore-dip',
  templateUrl: './gestore-dip.component.html',
  styleUrls: ['./gestore-dip.component.css']
})
export class GestoreDipComponent implements OnInit {
  cercaDip = false;
  nome: string;
  cognome: string;
  dip: Dipendente;
  progects: Project[];
  attivita: string;
  aggiungiProg = false;
  titolo: string;
  desc: string;

  constructor( private dipService: DipServiceService, private snackBar: MatSnackBar) {
    this.dip = new Dipendente();
    this.progects = new Array<Project>();
   }

  ngOnInit(): void {
  }

  cercaDipendente(){
    this.dipService.getDip(this.nome, this.cognome).subscribe(
      (d: Dipendente) => {this.dip = Dipendente.create(d), this.cercaProjects(); },
      err => this.errore(err.error)
    );
  }

  cercaProjects(){
    this.dipService.getProjects(this.dip.id).subscribe(
      (p: Project[]) => {
        this.progects = new Array<Project>(),
        p.forEach(element => {this.progects.push(Project.create(element)); }); } ,
      err => this.errore(err.error)
      );
  }

  addProject(){
    this.dipService.addProject(this.dip.id, this.titolo, this.desc).subscribe(
      (p: Project) => { this.progects.push(Project.create(p)); },
      err => this.errore(err.error)
    );
  }

  addTimesheet(p: Project){
    this.dipService.addTimesheet(p.id, this.attivita).subscribe(
      (ret: Project) => {
        const proj = Project.create(ret);
        p.timesheet = proj.timesheet; },
      err => this.errore(err.error)
    );
  }

  errore(err: string){
    this.snackBar.open(err, 'chiudi', { duration: 3000, } );
  }

}
