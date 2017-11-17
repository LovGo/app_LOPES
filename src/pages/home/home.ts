import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Horloge } from '../horloge/horloge';
import { Chrono } from '../chrono/chrono';
import { Minuteur } from '../minuteur/minuteur';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root = Horloge;
  tab2Root = Minuteur;
  tab3Root = Chrono;

  constructor(public navCtrl: NavController) {

  }

}
