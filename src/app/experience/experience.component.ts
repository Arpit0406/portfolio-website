import { Component } from '@angular/core';
import { ConstantsService } from '../shared/constants/constants';
import { NzIconService } from 'ng-zorro-antd/icon';
import { GRADUATIONHAT, SUITCASE } from '../shared/vectors';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  constructor(
    public constantService: ConstantsService,
    private iconService: NzIconService
  ) {}

  ngOnInit(): void {
    this.iconService.addIconLiteral('ng-zorro:education', GRADUATIONHAT);
    this.iconService.addIconLiteral('ng-zorro:suitcase', SUITCASE);
  }
}
