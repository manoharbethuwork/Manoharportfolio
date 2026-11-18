import { Injectable, inject } from '@angular/core';
import { Router, Scroll } from '@angular/router';
import { filter, firstValueFrom, race, timer } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SectionScroll {
  private readonly router = inject(Router);

  async goTo(sectionId: string): Promise<void> {
    const alreadyHome = this.pathOf(this.router.url) === '/';

    if (!alreadyHome) {
      await this.openHomePage();
    }

    const section = await this.waitForElement(sectionId);
    section?.scrollIntoView({
      behavior: alreadyHome && !this.prefersReducedMotion() ? 'smooth' : 'instant',
      block: 'start',
    });
  }

  private async openHomePage(): Promise<void> {
    const routerScrolled = firstValueFrom(
      race(this.router.events.pipe(filter((event) => event instanceof Scroll)), timer(400)),
    );
    await this.router.navigateByUrl('/');
    await routerScrolled;
  }

  private async waitForElement(id: string, maxFrames = 30): Promise<HTMLElement | null> {
    for (let frame = 0; frame < maxFrames; frame++) {
      const element = document.getElementById(id);
      if (element) {
        return element;
      }
      await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
    }
    return null;
  }

  private prefersReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  private pathOf(url: string): string {
    return url.split(/[?#]/)[0];
  }
}
