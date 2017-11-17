
export class mDate{

  private secondes: number = 0;
  private minutes:  number = 0;
  private heures:   number = 0;
  private s_jour:   number = 0;
  private c_jour:   string ='';
  private jour:     number = 0;
  private mois:     number = 0;
  private annee:    number = 0;
  private date= new Date();
  days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  maj(){
    this.date = new Date();
    this.secondes = this.date.getSeconds();
    this.minutes  = this.date.getMinutes();
    this.heures   = this.date.getHours();
    this.s_jour   = this.date.getUTCDay();
    this.c_jour   = this.days[this.s_jour];
    this.jour     = this.date.getDate();
    this.mois     = this.date.getMonth() + 1;
    this.annee    = this.date.getFullYear();

  }


}
