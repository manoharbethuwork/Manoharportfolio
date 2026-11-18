import { Component, Injector, afterNextRender, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { SectionLink } from '../../../shared/directives/section-link';

interface NavLink {
  label: string;
  target: string;
}

@Component({
  selector: 'app-navbar',
  imports: [SectionLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  host: {
    '(window:scroll)': 'onScroll()',
    '(window:resize)': 'onResize()',
    '(document:keydown.escape)': 'closeMenu()',
  },
})

export class Navbar {
  private readonly router = inject(Router);
  private readonly injector = inject(Injector);

  protected readonly links: NavLink[] = [
    { label: 'Home', target: 'home' },
    { label: 'About', target: 'about' },
    { label: 'Experience', target: 'experience' },
    { label: 'Skills', target: 'skills' },
    { label: 'Projects', target: 'projects' },
    { label: 'Education', target: 'education' },
    { label: 'Contact', target: 'contact' },
  ];

  protected readonly isScrolled = signal(false);
  protected readonly menuOpen = signal(false);
  private readonly currentPath = signal(this.pathOf(this.router.url));
  private readonly sectionOnScreen = signal('home');

  protected readonly activeSection = computed(() =>
    this.currentPath() === '/projects' ? 'projects' : this.sectionOnScreen(),
  );

  private readonly activationOffset = 120;
  private readonly mobileBreakpoint = 900;

  constructor() {
    afterNextRender(() => this.onScroll());

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe((event) => {
        this.currentPath.set(this.pathOf(event.urlAfterRedirects));
        this.closeMenu();
        afterNextRender(() => this.onScroll(), { injector: this.injector });
      });
  }

  protected onScroll(): void {
    this.isScrolled.set(window.scrollY > 10);
    this.sectionOnScreen.set(this.findSectionOnScreen());
  }

  protected onResize(): void {
    if (window.innerWidth > this.mobileBreakpoint) {
      this.closeMenu();
    }
    this.onScroll();
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  private findSectionOnScreen(): string {
    const atBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    if (atBottom) {
      return this.links[this.links.length - 1].target;
    }

    let current = this.links[0].target;
    for (const link of this.links) {
      const section = document.getElementById(link.target);
      if (section && section.getBoundingClientRect().top <= this.activationOffset) {
        current = link.target;
      }
    }
    return current;
  }

  private pathOf(url: string): string {
    return url.split(/[?#]/)[0];
  }
}
