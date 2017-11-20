import { Component }     from '@angular/core';
import { NavController } from 'ionic-angular';
import { Timer }         from '../../app/timer';
import { State }         from '../../app/state';
import { TwoDigit }      from '../../app/twodigits';

@Component({
  selector: 'page-minuteur',
  templateUrl: 'minuteur.html'
})
export class Minuteur {
  private myTimer: Timer  = new Timer();
  private myState: State  = new State();
  private btnPlay: string = 'Demarrer';

  private secondes: number = 0;
  private minutes:  number = 0;
  private timer;

  constructor(public navCtrl: NavController) {

  }
  start(){
    this.timer = setInterval(() => {
      this.secondes--;
      if(this.secondes == 0){
        this.minutes--;
        this.secondes = 60;
      }

    }, 1000);    this.myState.setPlay();
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
