import {Component} from '@angular/core'
import {
  siSpringboot,
  siPhp,
  siLaravel,
  siTypescript,
  siNestjs,
  siHtml5,
  siCss3,
  siBootstrap,
  siAngular,
  siMysql,
  siPostgresql,
  siMongodb,
  siIonic, siReact, siNextdotjs,
} from 'simple-icons'
import {IonicModule} from '@ionic/angular'
import {NgForOf} from '@angular/common'

@Component({
  selector: 'app-tech-badge',
  templateUrl: './tech-badge.component.html',
  styleUrls: ['./tech-badge.component.css'],
  standalone: true,
  imports: [IonicModule, NgForOf],
})
export class TechBadgeComponent {
  iconsBack = [
    {name: 'Spring Boot', icon: siSpringboot},
    {name: 'PHP', icon: siPhp},
    {name: 'Laravel', icon: siLaravel},
    {name: 'TypeScript', icon: siTypescript},
    {name: 'NestJS', icon: siNestjs},
  ]
  iconsFront = [
    {name: 'React', icon: siReact},
    {name: 'Next.js', icon: siNextdotjs},
    {name: 'Ionic', icon: siIonic},
    // {name: 'HTML5', icon: siHtml5},
    // {name: 'CSS3', icon: siCss3},
    // {name: 'Bootstrap', icon: siBootstrap},
    {name: 'Angular', icon: siAngular},
  ]
  iconsDB = [
    {name: 'MySQL', icon: siMysql},
    {name: 'PostgreSQL', icon: siPostgresql},
    {name: 'MongoDB', icon: siMongodb},
  ]

  constructor() {
  }

  protected readonly Object = Object
}
