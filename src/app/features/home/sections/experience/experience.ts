import { Component } from '@angular/core';
import { EXPERIENCES } from '../../../../data/portfolio.data';
import { SectionHeading } from '../../../../shared/components/section-heading/section-heading';
import { ExperienceItem } from './experience-item/experience-item';

@Component({
  selector: 'app-experience',
  imports: [SectionHeading, ExperienceItem],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})

export class Experience {
  protected readonly jobs = EXPERIENCES;
}
