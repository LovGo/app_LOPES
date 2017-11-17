import { Component } from '@angular/core';

import { Horloge } from '../horloge/horloge';
import { Chrono } from '../chrono/chrono';
import { HomePage } from '../home/home';
import { Minuteur } from '../minuteur/minuteur';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = Horloge;
  tab3Root = Minuteur;
  tab4Root = Chrono;

  constructor() {

  }
}
