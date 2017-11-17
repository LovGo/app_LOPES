import { Component }     from '@angular/core';
import { NavController } from 'ionic-angular';
import { Timer }         from '../../app/timer';
import { State }         from '../../app/state';
import { TwoDigit }      from '../../app/twodigits';

@Component({
  selector: 'page-chrono',
  templateUrl: 'chrono.html'
})
export class Chrono {
  private myTimer: Timer  = new Timer();
  private myState: State  = new State();
  private btnPlay: string = 'Demarrer';

  constructor(public navCtrl: NavController) {

  }
  start(){
    this.myTimer.start();
    this.myState.setPlay();
  }
  stop(){
    this.myTimer.stop();
    this.myState.setStop();
  }
  backward(){
    this.myTimer.reset();
    this.myState.setBackward();
  }

}
