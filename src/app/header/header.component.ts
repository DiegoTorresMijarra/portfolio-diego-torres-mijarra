import {booleanAttribute, Component, Input, OnInit} from '@angular/core'
import {IonicModule} from '@ionic/angular'
import {FormsModule} from '@angular/forms'
import {NgIf} from '@angular/common'
import {ThemeSwitchComponent} from "./theme-switch/theme-switch.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IonicModule, FormsModule, NgIf, ThemeSwitchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() loaded: boolean = false
}
