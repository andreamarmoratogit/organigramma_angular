import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomeService {
  private testo: string[];
  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/' ;
   }

  creaOrganigramma(nomeO: string , nomeU: string): Observable<any> {
    this.testo = [nomeO , nomeU];
    console.log('messaggio inviato');
    return this.http.post<string>(this.url, 'this.testo' );
  }
}
