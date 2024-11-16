import {
  AfterViewInit,
  booleanAttribute,
  Component,
  Input,
  OnInit,
  signal,
  ViewChild,
  WritableSignal
} from '@angular/core';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss'],
  standalone: true
})
export class ThemeSwitchComponent implements OnInit, AfterViewInit {
  @ViewChild('switch') switchElement: any;

  ngOnInit(): void {
    let mode = localStorage.getItem('darkMode')

    if (mode === 'false' || mode === 'true') {
      darkMode.set(booleanAttribute(mode))
    } else {
      darkMode.set(window.matchMedia('(prefers-color-scheme: dark)').matches)
    }

    this.initMode()
  }

  ngAfterViewInit(): void {
    this.switchElement.nativeElement.checked = darkMode()
  }


  protected initMode(): void {
    if (darkMode()) this.setMode()
  }

  protected toggleDarkMode(): void {
    darkMode.set(!darkMode())
    this.setMode()
    localStorage.setItem('darkMode', String(darkMode()))
  }

  protected setMode() {
    document.body.classList.toggle('dark')
  }
}

export const darkMode: WritableSignal<boolean> = signal(false)
