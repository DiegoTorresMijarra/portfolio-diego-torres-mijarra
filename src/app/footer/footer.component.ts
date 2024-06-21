import {Component, OnInit} from '@angular/core'
import {IonicModule} from '@ionic/angular'
import {ScrollService} from "../services/scroll.service";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {

  constructor(private scrollService: ScrollService) {
  }

  ngOnInit() {
    const brujaButton = document.getElementById('brujaButton');
    const brujaIcon = document.getElementById('brujaIcon');
    const animationContainer = document.getElementById('animationContainer');

    if (brujaButton && brujaIcon && animationContainer) {
      brujaButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link behavior

        // Get the button's bounding box
        const rect = brujaButton.getBoundingClientRect();
        animationContainer.style.left = `${rect.left}px`;
        animationContainer.style.top = `${rect.top}px`;

        brujaButton.classList.add('hidden')
        brujaIcon.classList.add('animate');
        this.scrollService.scrollToTop();

        setTimeout(() => {
          brujaButton.classList.remove('hidden')
          brujaIcon.classList.remove('animate');
        }, 1500); // Duration of the animation
      });
    }
  }

  scrollToSection(sectionId: string) {
    this.scrollService.scrollToSection(sectionId);
  }
}
