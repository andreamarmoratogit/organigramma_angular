import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HomeService } from 'src/app/service/home.service';
import { Organigramma } from 'src/app/class/organigramma';
import { Router } from '@angular/router';
import { UnitaPadre } from 'src/app/class/unita-padre';
import { MatSnackBar } from '@angular/material/snack-bar';

// componente che implementa la funzione Cerca Organigramma
@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {
  org: Organigramma;
  firstFormGroup: FormGroup;
  un: UnitaPadre;
  testo = '';
  constructor(private formBuilder: FormBuilder, private homeService: HomeService, private router: Router, private snackBar: MatSnackBar) {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.org = new Organigramma();
    this.un = new UnitaPadre();
    this.firstFormGroup.valueChanges.subscribe(value => {this.testo = value.firstCtrl; });
  }

  ngOnInit() {
  }

  cerca() {
    this.homeService.cercaOrganigramma(this.testo).subscribe(
      (res: Organigramma) => { this.org = Organigramma.create(res), // chiama il metodo factory
                                  this.homeService.setOrg(this.org),
                                  this.router.navigate(['organigramma']); },
       err => this.errore(err.error ),
       () => console.log('null')
    );
  }

  errore(msg: any){
    this.snackBar.open(msg, 'chiudi', { duration: 3000, } );
  }






}
