import { Component, input } from '@angular/core';
import { SocialLink } from '../../../models/social-link.model';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.html',
  styleUrl: './social-links.css',
})

export class SocialLinks {
  readonly links = input.required<SocialLink[]>();
}
