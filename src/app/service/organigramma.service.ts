import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { UnitaPadre } from '../class/unita-padre';
import { Organigramma } from '../class/organigramma';

@Injectable()
export class OrganigrammaService {
  private url: string;
  private unitaSelezionata = new BehaviorSubject<UnitaPadre>(null);
  public unitaObs: Observable<UnitaPadre> = this.unitaSelezionata.asObservable();

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/organigramma/' ;
  }

  aggUnita(orgId: number, idUnita: number, tipo: string, nome: string): Observable<any>{
    return this.http.post<Organigramma>(this.url + 'unita/' + orgId, [idUnita, tipo, nome] );
  }
  rimUnita(idOrg: number, idUnita: number): Observable<any>{
    return this.http.delete(this.url + 'unita/' + idOrg + '/' + idUnita);
  }
  aggDip(orgId: number, unitaId: number, nome: string, cognome: string, ruolo: string): Observable<any>{
    return this.http.post(this.url + 'dipendente/' + orgId, [unitaId, nome, cognome, ruolo] );
  }
  rimDip(idOrg: number, idU: number, idD: number): Observable<any>{
    return this.http.delete(this.url + 'dipendente/' + idOrg  + '/' + idU + '/' + idD );
  }
  aggRuolo(orgId: number , unitaId: number, nome: string): Observable<any>{
    return this.http.post(this.url + 'ruolo/' + orgId, [unitaId, nome] );
  }
  rimRuolo(idOrg: number, idU: number, nome: string): Observable<any>{
    return this.http.delete(this.url + 'ruolo/' + idOrg + '/' + idU + '/' + nome);
  }

  setUnita(unita: UnitaPadre){
    this.unitaSelezionata.next(unita);
  }






}
