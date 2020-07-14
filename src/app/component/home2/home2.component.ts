import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {
  firstFormGroup: FormGroup;
  testo = '';
  constructor(private formBuilder: FormBuilder) {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });

    this.firstFormGroup.valueChanges.subscribe(value => {this.testo = value.firstCtrl; });
  }

  ngOnInit() {
  }
  cerca(){
    if ( this.testo.length <= 0){
      return false;
    }
    return true;
  }
  click() {
    console.log(this.testo);
  }




}
