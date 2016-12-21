declare var window;
import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Data } from '../../providers/data';
//import { RepPage } from "../rep/rep";
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})

export class SearchPage {
  errorMessage: any;
  senate: any = [];
  cleanSenate: any = [];
  rep: string;
  loader: any;
  timer: any;
  subscription: any;
  filterParty: string = "All";
  filterState: string = "All";

  constructor(public navCtrl: NavController, public data: Data, public loadingCtrl: LoadingController) {
    this.timer = Observable.timer(2000, 3000);
    this.subscription = this.timer.subscribe(t => { this.loadData(); } );
  }

  ngOnInit() {
    let overlay = this.loadingCtrl.create({ content: "Loading ..." });
    this.loader = overlay;
    this.loader.present();
  }

  loadData() {

  }

  filter() {
    this.senate = this.cleanSenate;
    if (this.filterParty == "All" && this.filterState !== "All") {
      this.senate = this.senate.filter(record => record.state === this.filterState);
    } else if (this.filterParty !== "All" && this.filterState == "All") {
      this.senate = this.senate.filter(record => record.party === this.filterParty);
    } else  if (this.filterParty !== "All" && this.filterState !== "All") {
      this.senate = this.senate.filter(record => record.party === this.filterParty && record.state === this.filterState);
    }
  }

  launchPage() {
    //this.navCtrl.push(RepPage, { dataType: "senate", rep: this.rep, loading: this.loader });
  }

  viewRep( rep: string ) {
    this.rep = rep;
    let overlay = this.loadingCtrl.create({ content: "Loading " + rep + " ..." });
    this.loader = overlay;
    this.loader.present().then(action => this.launchPage() );
  }

}
