import {Injectable} from '@angular/core';
import {IonContent} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private content!: IonContent;

  constructor() {
  }

  setContent(content: IonContent) {
    this.content = content;
  }

  scrollToTop() {
    if (this.content) {
      this.content.scrollToTop(1500);
    }
  }
}
