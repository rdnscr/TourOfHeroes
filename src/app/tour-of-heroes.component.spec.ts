import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TourOfHeroesAppComponent } from '../app/tour-of-heroes.component';

beforeEachProviders(() => [TourOfHeroesAppComponent]);

describe('App: TourOfHeroes', () => {
  it('should create the app',
      inject([TourOfHeroesAppComponent], (app: TourOfHeroesAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'Tour of Heroes with angular CLI!\'',
      inject([TourOfHeroesAppComponent], (app: TourOfHeroesAppComponent) => {
    expect(app.title).toEqual('Tour of Heroes with angular CLI!');
  }));
});
