import { Component } from '@angular/core';
import { SKILLS } from '../../../../data/portfolio.data';
import { SectionHeading } from '../../../../shared/components/section-heading/section-heading';

@Component({
  selector: 'app-skills',
  imports: [SectionHeading],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})

export class Skills {
  protected readonly skills = SKILLS;

  protected keepLabelOnScreen(event: Event): void {
    const tile = event.currentTarget as HTMLElement;
    const label = tile.querySelector<HTMLElement>('.skill_name');
    if (!label) {
      return;
    }

    const tileBox = tile.getBoundingClientRect();
    const center = tileBox.left + tileBox.width / 2;
    const half = label.offsetWidth / 2;
    const screenWidth = document.documentElement.clientWidth;
    const margin = 8;

    let shift = 0;
    if (center - half < margin) {
      shift = margin - (center - half);
    } else if (center + half > screenWidth - margin) {
      shift = screenWidth - margin - (center + half);
    }
    tile.style.setProperty('--label-shift', `${shift}px`);
  }
}
