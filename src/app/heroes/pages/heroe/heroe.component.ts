import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe !: Heroe;

  constructor( private activatedRoute : ActivatedRoute, private heroesservice: HeroesService) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(switchMap(({id}) => this.heroesservice.getHeroePorId(id) ) )
    .subscribe( heroe => this.heroe = heroe);

  }

}
