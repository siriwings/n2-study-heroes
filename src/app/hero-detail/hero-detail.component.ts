/**
 * Created by siri on 2017-02-15.
 */
import {Component, Input} from '@angular/core';
import { Hero } from './../hero';

@Component({
  selector:'my-hero-detail',
  template: `
  <div *ngIf="hero">
    <h2>Hello, {{hero.name}}...!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
  </div>
`
})

export class HeroDetailComponent{
  @Input()
  hero:Hero;
}
