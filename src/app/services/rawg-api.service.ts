import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RawgApiService {
  private apiUrl = 'https://api.rawg.io/api';
  private apiKey = 'c3effaf7b27d42ec85e6e22357e9fec8';

  constructor(private http: HttpClient) {}
  
  getPopularGames(): Observable<any> {
    const url = `${this.apiUrl}/games?key=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}
