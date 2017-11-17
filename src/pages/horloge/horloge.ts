import { Component }     from '@angular/core';
import { NavController } from 'ionic-angular';
import { TwoDigit }      from '../../app/twodigits';
import { mDate }         from '../../app/mdate';

@Component({
  selector: 'page-horloge',
  templateUrl: 'horloge.html'
})

export class Horloge {
  private myDate: mDate   = new mDate();
  private timer;
  constructor() {
    this.timer=setInterval(() => {
      this.myDate.maj();
    }, 1000);
  }

}
