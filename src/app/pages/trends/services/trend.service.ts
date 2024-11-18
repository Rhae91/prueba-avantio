import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, Observable, of, tap} from 'rxjs';

import { GetAllTrendsResponse } from '../interfaces/get-all-trends-response.interface';
import { GetOneTrendResponse } from '../interfaces/get-one-trend-response.interface';
import { Trend } from '../models/trend.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class TrendService {
  private readonly urlBase = environment.avantioAPIHost;

  public readonly getAllUrl = `${this.urlBase}/v1/trends`;

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Trend[]> {
    return this.httpClient
      .get<GetAllTrendsResponse>(this.getAllUrl)
      .pipe(map(({ trends }) => [...trends.map(trend => new Trend(trend))]));
  }

  public getOne(id: string): Observable<Trend> {
    const url = `${this.getAllUrl}/${id}`;
    return this.httpClient
      .get<GetOneTrendResponse>(url)
      .pipe(map(({ trend }) => new Trend(trend)));
  }

  public deleteOne(id: string): Observable<any> {
    const url = `${this.getAllUrl}/${id}`;
    return this.httpClient
      .delete<any>(url)
      .pipe(tap(r => console.log(r)));
  }

  public createOne(trend: Trend): Observable<any> {
    const url = `${this.getAllUrl}`;
    return this.httpClient
      .post<Trend>(url, trend)
      .pipe(tap(r => console.log(r)));
  }

  public modifyOne(trend: Trend, id: string): Observable<any> {
    const url = `${this.getAllUrl}/${id}`;
    return this.httpClient
      .put<Trend>(url, trend)
      .pipe(tap(r => console.log(r)));
  }
}
