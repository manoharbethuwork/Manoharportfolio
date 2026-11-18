import { Component, input } from '@angular/core';
import { Project } from '../../../models/project.model';
import { TechTag } from '../tech-tag/tech-tag';

@Component({
  selector: 'app-project-card',
  imports: [TechTag],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})

export class ProjectCard {
  readonly project = input.required<Project>();
}
