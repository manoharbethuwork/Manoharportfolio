import { Component } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Experience } from './sections/experience/experience';
import { Skills } from './sections/skills/skills';
import { Projects } from './sections/projects/projects';
import { Education } from './sections/education/education';
import { Contact } from './sections/contact/contact';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Experience, Skills, Projects, Education, Contact],
  templateUrl: './home.html',
})
export class Home { }
