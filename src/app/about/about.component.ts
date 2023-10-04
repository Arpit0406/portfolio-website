import { Component } from '@angular/core';
import { ConstantsService } from '../shared/constants/constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  constructor(public constantService: ConstantsService) {}

  downloadResume() {
    let link = document.createElement('a');
    link.download = 'Arpit_Agarwal.pdf';
    link.href = 'assets/document/Arpit_Agarwal.pdf';
    link.click();
  }
}
