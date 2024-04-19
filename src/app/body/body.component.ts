import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {ContentHeaderComponent} from "../content-header/content-header.component";
import {IonContent, IonicModule} from "@ionic/angular";
import {ContentComponent} from "../content/content.component";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    ContentHeaderComponent,
    IonicModule,
    ContentComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
//  @ViewChild(AppComponent) body: IonContent;

  constructor() {
  }

  scrollTo(){
//    this.body?.scrollToTop().then(r => true);
  }
}
