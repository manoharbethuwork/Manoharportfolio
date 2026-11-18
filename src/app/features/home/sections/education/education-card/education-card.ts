import { Component, input } from '@angular/core';
import { EducationRecord } from '../../../../../models/education.model';

@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.html',
  styleUrl: './education-card.css',
})

export class EducationCard {
  readonly record = input.required<EducationRecord>();
}
