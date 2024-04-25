import { Component, OnInit } from '@angular/core'
import { AnimationController, IonicModule } from '@ionic/angular'
import { Clipboard } from '@capacitor/clipboard'
import { TechBadgeComponent } from './tech-badge/tech-badge.component'
import { TrabajosComponent } from './trabajos/trabajos.component'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  imports: [IonicModule, TechBadgeComponent, TrabajosComponent],
  standalone: true,
})
export class ContentComponent {
  async writeToClipboard(value: string) {
    await Clipboard.write({
      string: value,
    })
  }
}
