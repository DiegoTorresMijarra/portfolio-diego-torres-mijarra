import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from "./header/header.component";
import {BodyComponent} from "./body/body.component";
import {FooterComponent} from "./footer/footer.component";
import {HttpClientModule} from "@angular/common/http";
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HeaderComponent, BodyComponent, FooterComponent, HttpClientModule, ScrollingModule],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {
}
