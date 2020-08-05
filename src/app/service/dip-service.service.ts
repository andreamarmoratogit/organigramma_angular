import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DipServiceService {
  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:8080/dipendente/';
  }

  getProjects(idDip: number): Observable<any>{
    return this.httpClient.get(this.url + idDip);
  }

  addProject(idDip: number, titolo: string , desc: string): Observable<any>{
    return this.httpClient.post(this.url + idDip , [titolo, desc]);
  }

  getDip(nome: string, cogn: string){
    return this.httpClient.get(this.url + nome + '/' + cogn);
  }

  addTimesheet(idP: number, attivita: string){
    return this.httpClient.post(this.url + '/timesheet/' + idP, attivita);
  }


}
