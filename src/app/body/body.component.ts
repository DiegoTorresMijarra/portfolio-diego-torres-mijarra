import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {IonContent, IonicModule} from "@ionic/angular";
import {ContentHeaderComponent} from "./content-header/content-header.component";
import {ContentComponent} from "./content/content.component";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    ContentHeaderComponent,
    IonicModule,
    ContentComponent,
    ContentHeaderComponent,
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
