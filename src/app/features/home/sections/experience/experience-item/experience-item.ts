import { Component, input } from '@angular/core';
import { WorkExperience } from '../../../../../models/experience.model';
import { TechTag } from '../../../../../shared/components/tech-tag/tech-tag';

@Component({
  selector: 'app-experience-item',
  imports: [TechTag],
  templateUrl: './experience-item.html',
  styleUrl: './experience-item.css',
})

export class ExperienceItem {
  readonly job = input.required<WorkExperience>();
}
