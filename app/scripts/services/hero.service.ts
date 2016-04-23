import { Injectable } from 'angular2/core';

import { Hero } from '../models/hero';

import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';

@Injectable()
export class HeroService {
  constructor(private http : Http) {}

  private _heroesUrl = 'http://private-cc7d2-angular21.apiary-mock.com/questions';
  // private _heroesUrl = 'app/heroes.json';

  getHeroes() {
      return this.http.get(this._heroesUrl)
                .toPromise()
                .then(this.extractData)
                .catch(this.handleError);
  }
  private extractData(res: Response) {
      if (res.status < 200 || res.status >= 300) {
        throw new Error('Bad response status: ' + res.status);
      }
      let body = res.json();
      return body.data || { };
    }
    private handleError (error: any) {
      // In a real world app, we might send the error to remote logging infrastructure
      let errMsg = error.message || 'Server error';
      console.error(errMsg); // log to console instead
      return Promise.reject(errMsg);
    }

  getHero(id: number) {
    return Promise.resolve(this.getHeroes()).then(
      heroes => heroes.filter(hero => hero.id === id)[0]
    );
  }
}
