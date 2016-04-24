import { Injectable } from 'angular2/core';

import { Hero } from '../models/hero';
import { ApiService } from './api.service';

@Injectable()
export class HeroService {
  constructor(private netService : ApiService) {}

  private _heroesUrl = 'http://private-cc7d2-angular21.apiary-mock.com/questions';

  getHeroes() {
      return this.netService.get(this._heroesUrl);
  }

  postHeroes() {
    let body = JSON.stringify({ name });
    return this.netService.post(this._heroesUrl, body);
  }
}
