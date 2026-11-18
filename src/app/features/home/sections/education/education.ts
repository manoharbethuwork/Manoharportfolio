import { Component } from '@angular/core';
import { EDUCATION } from '../../../../data/portfolio.data';
import { SectionHeading } from '../../../../shared/components/section-heading/section-heading';
import { EducationCard } from './education-card/education-card';

@Component({
  selector: 'app-education',
  imports: [SectionHeading, EducationCard],
  templateUrl: './education.html',
  styleUrl: './education.css',
})

export class Education {
  protected readonly records = EDUCATION;
}
