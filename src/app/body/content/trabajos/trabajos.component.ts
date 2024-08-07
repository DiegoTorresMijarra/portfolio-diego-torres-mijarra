import {Component, OnInit, ViewChild, viewChild} from '@angular/core'
import {AnimationController, IonContent, IonicModule} from '@ionic/angular'
import {HttpClient} from '@angular/common/http'
import {TrabajoModel, TrabajosService} from './trabajos.service'
import {JsonPipe, NgForOf, NgIf} from '@angular/common'
import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling'
import {document} from 'ionicons/icons'

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css'],
  standalone: true,
  imports: [
    IonicModule,
    NgForOf,
    JsonPipe,
    CdkVirtualScrollViewport,
    CdkFixedSizeVirtualScroll,
    NgIf,
  ],
})
export class TrabajosComponent implements OnInit {
  @ViewChild('modalContent', {static: false}) modalContent!: IonContent

  trabajos: TrabajoModel[] = []
  segment: string = ''

  constructor(
    private animationCtrl: AnimationController,
    private trabajoService: TrabajosService,
  ) {
  }

  ngOnInit() {
    this.trabajoService.getTrabajos().subscribe((trabajos: TrabajoModel[]) => {
      this.trabajos = trabajos
    })
  }

  segmentChanged(ev: any) {
    this.segment = ev.detail.value
    this.scrollToBottom()
  }

  async scrollToBottom() {
    if (this.modalContent) {
      this.modalContent.scrollToBottom(250)
    }
  }

  enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot

    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(root?.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)')

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(root?.querySelector('.modal-wrapper')!)
      .keyframes([
        {offset: 0, opacity: '0', transform: 'scale(0)'},
        {offset: 1, opacity: '0.99', transform: 'scale(1)'},
      ])

    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation])
  }

  leaveAnimation = (baseEl: HTMLElement) => {
    this.segment = ''
    return this.enterAnimation(baseEl).direction('reverse')
  }
}
