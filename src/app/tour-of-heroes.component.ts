import { Component } from '@angular/core';
import Hero, {HEROES} from './heroes';

@Component({
  moduleId: module.id,
  selector: 'tour-of-heroes-app',
  templateUrl: 'tour-of-heroes.component.html',
  styleUrls: ['tour-of-heroes.component.css']
})
export class TourOfHeroesAppComponent {
  public title = 'Tour of Heroes with angular CLI!';
  public hero = new Hero(1, 'Windstorm');
  public heroes = HEROES;
}
