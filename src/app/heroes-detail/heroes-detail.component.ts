import { Component, OnInit, Input } from '@angular/core';
import Hero from '../heroes';

@Component({
  moduleId: module.id,
  selector: 'app-heroes-detail',
  templateUrl: 'heroes-detail.component.html',
  styleUrls: ['heroes-detail.component.css']
})
export class HeroesDetailComponent implements OnInit {
  @Input()
  public hero: Hero;

  constructor() {

  }

  ngOnInit() {
  }

}
