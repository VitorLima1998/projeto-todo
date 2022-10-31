import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../../model/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  hero?: Hero;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.getHero(id);
  }

  getHero(id: string): void {
    this.heroService.getHero(id).subscribe({
      next: (hero) => (this.hero = hero),
    });
  }
}
