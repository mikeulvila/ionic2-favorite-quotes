import { Component } from '@angular/core';
import {NavController, NavParams, ModalController} from 'ionic-angular';
import {QuotesService} from "../../services/quotes.service";
import {Quote} from "../../data/quote.interface";
import {QuotePage} from "../quote/quote";

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {
  quotes: Quote[];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private quotesService: QuotesService,
              private modalCtrl: ModalController) {}

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage);
    modal.present();
  }


}
