import { Component } from '@angular/core';
import { PROFILE, RESUME_URL, SOCIAL_LINKS } from '../../../../data/portfolio.data';
import { SocialLinks } from '../../../../shared/components/social-links/social-links';
import { SectionLink } from '../../../../shared/directives/section-link';

@Component({
  selector: 'app-hero',
  imports: [SocialLinks, SectionLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})

export class Hero {
  protected readonly profile = PROFILE;
  protected readonly socialLinks = SOCIAL_LINKS;
  protected readonly resumeUrl = RESUME_URL;
}
