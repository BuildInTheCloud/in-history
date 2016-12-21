declare var window;
import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Data } from '../../providers/data';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'page-today',
  templateUrl: 'today.html'
})

export class TodayPage {
  errorMessage: any;
  history: any = [];
  m: string = "0";
  d: string = "0";
  loader: any;

  constructor(public navCtrl: NavController, public data: Data, public loadingCtrl: LoadingController) {
    var date: any = new Date();
    this.d = date.getDate().toString();
    this.m = (date.getMonth()+1).toString();
  }

  ngOnInit() {
    let overlay = this.loadingCtrl.create({ content: "Loading ..." });
    this.loader = overlay;
    this.loader.present();
    this.loadData();
  }

  loadData() {
    this.history = [];
    this.data.getToday().then(data => {
      for (var x = 0; x < data.events.length; x++) {
        var date: string = data.events[x].date;
        if (date.indexOf("/") > 0) {
          var dateA: any = date.split("/");
          if (dateA[1] == this.m && dateA[2] == this.d) {
            this.history.push(data.events[x]);
          }
        }
      }
      this.loader.dismiss();
    });
  }

  showIt(strTxt: string, cat1: string, cat2: string) {
    if (strTxt == "Date unknown") {
      return false;
    } else if (strTxt == "By place") {
      return false;
    } else if (strTxt == "By topic") {
      return false;
    } else {
      if (!cat2) {
        return false;
      } else {
        return true;
      }
    }
  }

  formatIt(strTxt: string) {
    if (strTxt) {
      strTxt = strTxt.replace(/&amp/g, "");
      strTxt = strTxt.replace(/amp/g, "");
      strTxt = strTxt.replace(/ndash/g, " -- ");
      strTxt = strTxt.replace(/;/g, "");
      return strTxt;
    } else {
      return "";
    }
  }

  formatDesc(strTxt: string) {
    if (strTxt) {
      strTxt = strTxt.replace(/ampquot/g, "");
      return strTxt;
    } else {
      return "";
    }
  }

  yearDisplay(strTxt: string) {
    if (strTxt.length < 4) {
      return strTxt;
    } else {
      return strTxt;
    }
  }

}
