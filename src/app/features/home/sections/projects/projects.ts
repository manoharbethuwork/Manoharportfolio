import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FOUNDATIONAL_PROJECTS } from '../../../../data/portfolio.data';
import { ProjectCard } from '../../../../shared/components/project-card/project-card';
import { SectionHeading } from '../../../../shared/components/section-heading/section-heading';

@Component({
  selector: 'app-projects',
  imports: [RouterLink, SectionHeading, ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})

export class Projects {
  protected readonly projects = FOUNDATIONAL_PROJECTS.slice(0, 4);
}
