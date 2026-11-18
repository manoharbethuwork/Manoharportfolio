import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tech-tag',
  templateUrl: './tech-tag.html',
  styleUrl: './tech-tag.css',
})

export class TechTag {
  readonly label = input.required<string>();
}
