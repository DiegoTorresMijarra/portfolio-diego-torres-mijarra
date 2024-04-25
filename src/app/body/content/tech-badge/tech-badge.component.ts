import { Component } from '@angular/core'
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
  siIonic,
} from 'simple-icons'
import { IonicModule } from '@ionic/angular'
import { NgForOf } from '@angular/common'

@Component({
  selector: 'app-tech-badge',
  templateUrl: './tech-badge.component.html',
  styleUrls: ['./tech-badge.component.css'],
  standalone: true,
  imports: [IonicModule, NgForOf],
})
export class TechBadgeComponent {
  iconsBack = [
    { name: 'Spring Boot', icon: siSpringboot },
    { name: 'PHP', icon: siPhp },
    { name: 'Laravel', icon: siLaravel },
    { name: 'TypeScript', icon: siTypescript },
    { name: 'NestJS', icon: siNestjs },
  ]
  iconsFront = [
    { name: 'HTML5', icon: siHtml5 },
    { name: 'CSS3', icon: siCss3 },
    // {name: 'Bootstrap', icon: siBootstrap},
    { name: 'Angular', icon: siAngular },
    { name: 'Ionic', icon: siIonic },
  ]
  iconsDB = [
    { name: 'MySQL', icon: siMysql },
    { name: 'PostgreSQL', icon: siPostgresql },
    { name: 'MongoDB', icon: siMongodb },
  ]

  constructor() {}

  protected readonly Object = Object
}
