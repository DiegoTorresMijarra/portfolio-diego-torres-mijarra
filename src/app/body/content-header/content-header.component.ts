import { Component, OnInit } from '@angular/core'
import { IonicModule, Platform } from '@ionic/angular'

@Component({
  selector: 'app-content-header',
  standalone: true,
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.css'],
  imports: [IonicModule],
})
export class ContentHeaderComponent implements OnInit {
  ngOnInit() {}

  //
  // constructor(private platform: Platform) {
  // }
  //
  // downloadCV() {
  //   const fileUrl = 'assets/CV_DiegoTorres2024(tecnico).pdf';
  //
  //   if (this.platform.is('capacitor')) {
  //     this.downloadMobile(fileUrl);
  //   } else {
  //     this.downloadWeb(fileUrl);
  //   }
  // }
  //
  // downloadWeb(fileUrl: string) {
  //   const link = document.createElement('a');
  //   link.href = fileUrl;
  //   link.download = 'CV_DiegoTorres2024.pdf';
  //   link.target = '_blank';
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // }
  //
  // private downloadMobile(fileUrl: string) {
  //
  // }
}
