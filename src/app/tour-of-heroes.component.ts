import { Component } from '@angular/core';

export class Hero {
  constructor(public id: number, public name: string){
    
  }
}

@Component({
  moduleId: module.id,
  selector: 'tour-of-heroes-app',
  templateUrl: 'tour-of-heroes.component.html',
  styleUrls: ['tour-of-heroes.component.css']
})
export class TourOfHeroesAppComponent {
  title = 'Tour of Heroes with angular CLI!';
  hero = new Hero(1, 'Windstorm');
}
