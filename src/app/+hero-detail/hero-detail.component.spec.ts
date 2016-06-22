import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component, provide } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HeroDetailComponent } from './hero-detail.component';
import Hero from '../shared/hero';
import HeroService from '../shared/hero.service';
import { RouteParams } from '@angular/router-deprecated';

describe('Component: HeroDetail', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [provide(RouteParams, { useValue: new RouteParams({ id: '1' }) }),
    HeroDetailComponent,
    HeroService]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([HeroDetailComponent],
    (component: HeroDetailComponent) => {
      expect(component).toBeTruthy();
    }));

  it('should create the component', inject([], () => {
    return builder.createAsync(HeroDetailComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(HeroDetailComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-hero-detail></app-hero-detail>
  `,
  directives: [HeroDetailComponent]
})
class HeroDetailComponentTestController {
}

