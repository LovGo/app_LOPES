import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
* Generated class for the ListVillePage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@Component({
  selector: 'page-list-ville',
  templateUrl: 'list-ville.html',
})
export class ListVillePage {
  myItem: any;
  myMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myItem = navParams.get('item');
    this.myMessage = navParams.get('message');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListVillePage');
  }

  validate(){
    this.navCtrl.pop();
  }

}
