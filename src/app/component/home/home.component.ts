import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  testo = '';
  testo2 = '';

  constructor(private formBuilder: FormBuilder, private homeService: HomeService) {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.firstFormGroup.valueChanges.subscribe(value => {this.testo = value.firstCtrl; });
    this.secondFormGroup.valueChanges.subscribe(value => {this.testo2 = value.secondCtrl; });
  }

  ngOnInit() {

  }
  cerca(){
    if ( this.testo.length <= 0 || this.testo2.length <= 0){
      return false;
    }
    return true;
  }
  click() {
    console.log(`${this.testo}  ${this.testo2}`);

    this.homeService.creaOrganigramma(this.testo, this.testo2);
  }

}
