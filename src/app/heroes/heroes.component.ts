import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero'
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  /*
  * Adicionado rotas para o componente heroDetail, não mais necessário controlar o hero selecionado
  selectedHero: Hero;
  onSelect(hero): void {
    this.selectedHero = hero;
  }
  */
}
