import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Organigramma } from '../class/organigramma';

@Injectable()
export class HomeService {
  private url: string;
  private org = new BehaviorSubject<Organigramma>(null);
  public orgObs: Observable<Organigramma> = this.org.asObservable();
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/' ;
  }

  creaOrganigramma(nomeO: string , nomeU: string): Observable<any> {
    return this.http.post<Organigramma>(this.url, [nomeO , nomeU] );
  }

  cercaOrganigramma(nome: string): Observable<any> {
    return this.http.get<Organigramma>(this.url + nome ) ;
  }

  setOrg(organigramma: Organigramma){
    this.org.next(organigramma);
  }
  eliminaOrg(idOrg: number): Observable<any>{
    return this.http.delete(this.url + idOrg);
  }



}
