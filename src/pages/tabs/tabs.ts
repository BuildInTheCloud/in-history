import { Component } from '@angular/core';

//-- app pages for tabs
import { TodayPage } from '../today/today';
import { SearchPage } from '../search/search';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
  tabToday: any = TodayPage;
  tabSearch: any = SearchPage;
  tabAbout: any = AboutPage;

  constructor() {

  }
}
