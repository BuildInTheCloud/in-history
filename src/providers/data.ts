import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class Data {
  history: any = [];

  constructor(public http: Http, public storage: Storage) {

  }

  public getToday(): Promise<any> {
    return new Promise(resolve => {
      if (this.history.length > 0) {
          resolve(this.history);
      } else {
        this.http.get("assets/data/history.json")
          .map(res => res.json())
          .subscribe(data => {
            this.history = data.result;
            resolve(this.history);
          })
        ;
        /*
        this.http.get("http://www.vizgr.org/historical-events/search.php?format=json&begin_date=-30000000&end_date=20160000&granularity=month&lang=en")
          .map(res => res.json())
          .subscribe(data => {
            console.log("get", data.result.event);
            this.history = data.result;
            resolve(this.history);
          })
        ;
        */
      }
    });
  }

}

