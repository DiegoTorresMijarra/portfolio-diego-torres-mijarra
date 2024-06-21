import {AfterViewInit, Component, ViewChild} from '@angular/core'
import {IonContent, IonicModule} from '@ionic/angular'
import {ContentHeaderComponent} from './content-header/content-header.component'
import {ContentComponent} from './content/content.component'
import {ScrollService} from "../services/scroll.service";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    ContentHeaderComponent,
    IonicModule,
    ContentComponent,
    ContentHeaderComponent,
    ContentComponent,
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent implements AfterViewInit {

  @ViewChild('mainContent', {static: false}) content!: IonContent;

  constructor(private scrollService: ScrollService) {
  }

  ngAfterViewInit() {
    this.scrollService.setContent(this.content);
  }
}
