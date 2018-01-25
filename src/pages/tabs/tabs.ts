import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { InvestmentsPage } from '../investments/investments';
import { ToolsPage } from '../tools/tools';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = InvestmentsPage;
  tab3Root = ToolsPage;
  tab4Root = ContactPage;

  constructor() {

  }
}
