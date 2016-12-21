import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { Data } from '../providers/data';
import {MomentModule} from 'angular2-moment';
//-- app pages
import { TodayPage } from '../pages/today/today';
import { SearchPage } from '../pages/search/search';
import { AboutPage } from '../pages/about/about';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    TodayPage,
    SearchPage,
    AboutPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    MomentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    TodayPage,
    SearchPage,
    AboutPage
  ],
  providers: [
    Storage,
    Data
  ]
})

export class AppModule {

}
