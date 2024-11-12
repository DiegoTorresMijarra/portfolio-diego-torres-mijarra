import {AfterViewInit, booleanAttribute, Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss'],
  standalone: true
})
export class ThemeSwitchComponent implements OnInit, AfterViewInit {
  darkMode: boolean | undefined
  @ViewChild('switch') switchElement: any;

  ngOnInit(): void {
    let mode = localStorage.getItem('darkMode')
    
    if (mode === 'false' || mode === 'true') {
      this.darkMode = booleanAttribute(mode)
    } else {
      this.darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    }

    this.initMode()
  }

  ngAfterViewInit(): void {
    this.switchElement.nativeElement.checked = this.darkMode
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
