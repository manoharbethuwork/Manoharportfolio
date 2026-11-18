import { Directive, inject, input } from '@angular/core';
import { SectionScroll } from '../../core/services/section-scroll';

@Directive({
  selector: 'a[appSectionLink]',
  host: {
    '[attr.href]': '"/#" + appSectionLink()',
    '(click)': 'onClick($event)',
  },
})

export class SectionLink {
  readonly appSectionLink = input.required<string>();

  private readonly sectionScroll = inject(SectionScroll);

  protected onClick(event: MouseEvent): void {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
      return;
    }
    event.preventDefault();
    void this.sectionScroll.goTo(this.appSectionLink());
  }
}
