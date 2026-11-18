import { Component } from '@angular/core';
import { ABOUT_CARDS, ABOUT_TEXT } from '../../../../data/portfolio.data';
import { SectionHeading } from '../../../../shared/components/section-heading/section-heading';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.css',
  imports: [SectionHeading],
})

export class About {
  protected readonly text = ABOUT_TEXT;
  protected readonly cards = ABOUT_CARDS;
}
