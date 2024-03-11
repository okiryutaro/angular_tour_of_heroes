import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { NgIf,NgFor,UpperCasePipe, } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FormsModule,NgIf,NgFor,UpperCasePipe,HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})

export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;
  constructor(private heroService: HeroService, private messageService: MessageService) {}
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}

