import { Component } from '@angular/core';
import { FOUNDATIONAL_PROJECTS, INDEPENDENT_PROJECTS } from '../../data/portfolio.data';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { SectionLink } from '../../shared/directives/section-link';

@Component({
  selector: 'app-projects-page',
  imports: [ProjectCard, SectionLink],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.css',
})

export class ProjectsPage {
  protected readonly independent = INDEPENDENT_PROJECTS;
  protected readonly foundational = FOUNDATIONAL_PROJECTS;
}
