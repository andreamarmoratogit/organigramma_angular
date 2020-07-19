import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HomeService } from 'src/app/service/home.service';
import { Organigramma } from 'src/app/class/organigramma';
import { Router } from '@angular/router';
import { UnitaPadre } from 'src/app/class/unita-padre';
import { OrganigrammaService } from 'src/app/service/organigramma.service';

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
  constructor(private formBuilder: FormBuilder, private homeService: HomeService, private router: Router) {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.org = new Organigramma();
    this.un = new UnitaPadre(false);
    this.firstFormGroup.valueChanges.subscribe(value => {this.testo = value.firstCtrl; });
  }

  ngOnInit() {
  }
  verifica(){
    if ( this.testo.length <= 0){
      return false;
    }
    return true;
  }
  cerca() {
    console.log(this.testo);
    this.homeService.cercaOrganigramma(this.testo).subscribe((res: Organigramma) =>
      {this.org.create(res),
      this.homeService.setOrg(this.org),
      this.router.navigate(['organigramma']); }
    );
  }






}
