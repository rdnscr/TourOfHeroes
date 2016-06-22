// import {
//   beforeEach,
//   beforeEachProviders,
//   describe,
//   expect,
//   it,
//   inject,
// } from '@angular/core/testing';
// import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
// import { Component, provide } from '@angular/core';
// import { By } from '@angular/platform-browser';
// import { HeroesComponent } from './heroes.component';
// import { RootRouter } from '@angular/router-deprecated/src/router';
// import { Router, RouteRegistry, ROUTER_PRIMARY_COMPONENT } from '@angular/router-deprecated';
// import { Location } from '@angular/common';
// import { SpyLocation } from '@angular/common/testing';
// import HeroService from '../shared/hero.service';

// describe('Component: Heroes', () => {
//   let builder: TestComponentBuilder;

//   beforeEachProviders(() => [HeroesComponent,
//     RouteRegistry,
//     provide(Location, { useClass: SpyLocation }),
//     provide(ROUTER_PRIMARY_COMPONENT, { useClass: HeroesComponentTestController }),
//     Router, { useClass: RootRouter },
//     HeroService]);

//   beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
//     builder = tcb;
//   }));

//   it('should inject the component', inject([HeroesComponent],
//     (component: HeroesComponent) => {
//       expect(component).toBeTruthy();
//     }));

//   it('should create the component', inject([], () => {
//     return builder.createAsync(HeroesComponentTestController)
//       .then((fixture: ComponentFixture<any>) => {
//         let query = fixture.debugElement.query(By.directive(HeroesComponent));
//         expect(query).toBeTruthy();
//         expect(query.componentInstance).toBeTruthy();
//       });
//   }));
// });

// @Component({
//   selector: 'test',
//   template: `
//     <app-heroes></app-heroes>
//   `,
//   directives: [HeroesComponent]
// })
// class HeroesComponentTestController {
// }

