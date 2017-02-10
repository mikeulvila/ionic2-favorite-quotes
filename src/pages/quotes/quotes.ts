import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
import { Quote } from '../../data/quote.interface'
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage implements OnInit {
  quoteGroup: {category: string, quotes: Quote[], icon: string};

  constructor(public navCtrl: NavController,
              private navParams: NavParams,
              private alertCtrl: AlertController) {}

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }
  // ionViewDidLoad() {
  //   this.quoteGroup = this.navParams.data;
  //  Add Elvis operator (?) in template to use this approach: quoteGroup?.category
  // }

  onAddToFavorite(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            console.log('Yes');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel');
          }
        }
      ]
    });
    alert.present();
  }
}
