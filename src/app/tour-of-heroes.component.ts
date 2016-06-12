import { Component } from '@angular/core';
import Hero, {HEROES} from './heroes';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@Component({
  moduleId: module.id,
  selector: 'tour-of-heroes-app',
  templateUrl: 'tour-of-heroes.component.html',
  styleUrls: ['tour-of-heroes.component.css'],
  directives: [HeroDetailComponent]
})
export class TourOfHeroesAppComponent {
  public title = 'Tour of Heroes with angular CLI!';
  public selectedHero: Hero;
  public heroes = HEROES;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
