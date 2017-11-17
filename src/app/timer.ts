

export class Timer{
  private secondes: number = 0;
  private minutes:  number = 0;
  private heures:   number = 0;
  private timer;

  start(){
    this.timer = setInterval(() => {
      this.secondes++;
      if(this.secondes == 60){
        this.secondes =0;
        this.minutes++;
        if(this.minutes == 60){
          this.minutes = 0;
          this.heures++;
        }
      }
    }, 1000);
  }

  stop(){
    clearInterval(this.timer);
  }

  reset(){
    this.minutes= this.secondes = this.heures = 0;
  }
}
