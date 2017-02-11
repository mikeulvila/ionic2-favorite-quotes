import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {QuotesService} from "../../services/quotes.service";
import {Quote} from "../../data/quote.interface";

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {
  quotes: Quote[];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private quotesService: QuotesService) {}

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }


}
