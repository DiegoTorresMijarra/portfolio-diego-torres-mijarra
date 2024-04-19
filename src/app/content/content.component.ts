import { Component, OnInit } from '@angular/core';
import {AnimationController, IonicModule} from "@ionic/angular";
import {TechBadgeComponent} from "../tech-badge/tech-badge.component";
import { Clipboard } from '@capacitor/clipboard';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  imports: [
    IonicModule,
    TechBadgeComponent
  ],
  standalone: true
})

export class ContentComponent{

  constructor(private animationCtrl: AnimationController) {
  }

  enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = this.animationCtrl
        .create()
        .addElement(root?.querySelector('ion-backdrop')!)
        .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationCtrl
        .create()
        .addElement(root?.querySelector('.modal-wrapper')!)
        .keyframes([
          {offset: 0, opacity: '0', transform: 'scale(0)'},
          {offset: 1, opacity: '0.99', transform: 'scale(1)'},
        ]);

    return this.animationCtrl
        .create()
        .addElement(baseEl)
        .easing('ease-out')
        .duration(500)
        .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  leaveAnimation = (baseEl: HTMLElement) => {
    return this.enterAnimation(baseEl).direction('reverse');
  };

  async writeToClipboard (value: string) {
    await Clipboard.write({
      string: value,
    });
  };
}
