import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../model/hero';

const baseUrl = 'http://localhost:3000/api/hero';
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  // HEROES: Hero[] = [
  //   {
  //     id: 1,
  //     name: 'Spider Man',
  //   },
  //   {
  //     id: 2,
  //     name: 'Iron Man',
  //   },
  //   {
  //     id: 3,
  //     name: 'Captain America',
  //   },
  //   {
  //     id: 4,
  //     name: 'Thor',
  //   },
  // ];

  HEROES: Hero[] = [];

  // constructor() {}
  constructor(private http: HttpClient) {}
  // getHeroes(): Hero[] {
  //   return this.HEROES;
  // }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(baseUrl);
  }

  getHero(id: string): Observable<Hero> {
    return this.http.get<Hero>(`${baseUrl}/list/${id}`);
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post(baseUrl, hero);
  }

  updateHero(newHero: Hero): Observable<Hero> {
    return this.http.put(baseUrl, newHero);
  }

  removeHeroes(id: string): Observable<Hero> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  findByName(name: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${baseUrl}?name= ${name}`);
  }

  findByEmail(email: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${baseUrl}?name=${email}`);
  }
}
