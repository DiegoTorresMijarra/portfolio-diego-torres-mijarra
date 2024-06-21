import { booleanAttribute, Component, Input, OnInit } from '@angular/core'
import { IonicModule } from '@ionic/angular'
import { FormsModule } from '@angular/forms'
import { NgIf } from '@angular/common'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IonicModule, FormsModule, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  darkMode: boolean | undefined
  @Input() loaded: boolean = false

  ngOnInit(): void {
    let mode = localStorage.getItem('darkMode')

    if (mode === 'false' || mode === 'true') {
      this.darkMode = booleanAttribute(mode)
    } else {
      this.darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    }

    this.initMode()
  }

  protected initMode(): void {
    if (this.darkMode) this.setMode()
  }

  protected toggleDarkMode(): void {
    this.darkMode = !this.darkMode
    this.setMode()
    localStorage.setItem('darkMode', String(this.darkMode))
  }

  protected setMode() {
    document.body.classList.toggle('dark')
  }
}
