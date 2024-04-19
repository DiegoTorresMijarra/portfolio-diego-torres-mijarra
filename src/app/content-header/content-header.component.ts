import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-content-header',
  standalone: true,
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.css'],
  imports: [
    IonicModule,
  ]
})
export class ContentHeaderComponent  implements OnInit {
  ngOnInit() {  }
}
