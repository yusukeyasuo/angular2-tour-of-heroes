import { Injectable } from 'angular2/core';

import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class ApiService {
  constructor(private http : Http) {}

  get(url: String) {
      return this.http.get(url)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  post(url: String, body: String) {
    let body = JSON.stringify({ name });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url, body, options)
      .map(this.extractData)
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
        return Observable.throw(errMsg);
    }
}
