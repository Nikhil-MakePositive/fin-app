import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Geolocation } from '@ionic-native/geolocation';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ChartsModule } from 'ng2-charts';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { InvestmentsPage } from '../pages/investments/investments';
import { ToolsPage } from '../pages/tools/tools';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { EmiCalPage } from '../pages/emi-cal/emi-cal';
import { PopoverPage } from '../pages/popover/popover';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    InvestmentsPage,
    HomePage,
    ToolsPage,
    ItemDetailPage,
    EmiCalPage,
    PopoverPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    InvestmentsPage,
    ItemDetailPage,
    ToolsPage,
    EmiCalPage,
    PopoverPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Diagnostic,
    Geolocation,
    NgxDatatableModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
