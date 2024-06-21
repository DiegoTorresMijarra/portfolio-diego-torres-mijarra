import {Component, OnInit} from '@angular/core'
import {AnimationController, IonicModule} from '@ionic/angular'
import {Clipboard} from '@capacitor/clipboard'
import {TechBadgeComponent} from './tech-badge/tech-badge.component'
import {TrabajosComponent} from './trabajos/trabajos.component'
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  imports: [IonicModule, TechBadgeComponent, TrabajosComponent, NgOptimizedImage],
  standalone: true,
})
export class ContentComponent {
  async writeToClipboard(value: string) {
    await Clipboard.write({
      string: value,
    })
  }

  protected readonly screen = screen;
}
