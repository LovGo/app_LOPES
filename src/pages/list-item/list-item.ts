import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
* Generated class for the ListItemPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@Component({
  selector: 'page-list-item',
  templateUrl: 'list-item.html',
})
export class ListItemPage {
  myItem: any;
  myMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myItem = navParams.get('item');
    this.myMessage = navParams.get('message');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListItemPage');
  }

  validate(){
    this.navCtrl.pop();
  }

}
