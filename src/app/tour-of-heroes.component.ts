import { Component } from '@angular/core';
import Hero from './shared/hero';
import HeroService from './shared/hero.service';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@Component({
  moduleId: module.id,
  selector: 'tour-of-heroes-app',
  templateUrl: 'tour-of-heroes.component.html',
  styleUrls: ['tour-of-heroes.component.css'],
  directives: [HeroDetailComponent],
  providers: [HeroService]
})
export class TourOfHeroesAppComponent {
  public title = 'Tour of Heroes with angular CLI!';
  public selectedHero: Hero;
  public heroes: Hero[];

  constructor(private heroService: HeroService){

  }

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
