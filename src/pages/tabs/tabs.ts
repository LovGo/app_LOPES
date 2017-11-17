import { Component } from '@angular/core';

import { Horloge } from '../horloge/horloge';
import { Chrono } from '../chrono/chrono';
import { HomePage } from '../home/home';
import { Minuteur } from '../minuteur/minuteur';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = Horloge;
  tab3Root = SettingsPage;
  tab4Root = Minuteur;
  tab5Root = Chrono;

  constructor() {

  }
}
