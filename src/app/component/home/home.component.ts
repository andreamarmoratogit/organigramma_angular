import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HomeService } from 'src/app/service/home.service';
import { Organigramma } from 'src/app/class/organigramma';
import { Router } from '@angular/router';


// componente che implementa la funzione crea organigramma e contiene Home2Component
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  org: Organigramma;
  nomeO: string;
  nomeR: string;

  constructor(private formBuilder: FormBuilder, private homeService: HomeService, private router: Router) {
    this.nomeO = '';
    this.nomeR = '';
    this.org = new Organigramma();
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.firstFormGroup.valueChanges.subscribe(value => {this.nomeO = value.firstCtrl; });
    this.secondFormGroup.valueChanges.subscribe(value => {this.nomeR = value.secondCtrl; });
  }

  ngOnInit() {

  }

  crea() {
    this.homeService.creaOrganigramma(this.nomeO, this.nomeR).subscribe((res: Organigramma) =>
    { this.org = Organigramma.create(res),
      this.homeService.setOrg(this.org),
      this.router.navigate(['organigramma']); }
    );
  }

}
