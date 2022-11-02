import { Injectable } from '@angular/core';
import { Dipendente } from './dipendente';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DipendenteServiceService {

private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getDipendenti(): Observable<Dipendente[]>{  
      return this.http.get<Dipendente[]>(`${this.apiServerUrl}/dipendenti/all`);
  }

  public addDipendente(dipendente: Dipendente): Observable<Dipendente>{
    return this.http.post<Dipendente>(`${this.apiServerUrl}/dipendenti/add`, dipendente);
  }

  public updateDipendente(dipendente: Dipendente): Observable<Dipendente>{
    return this.http.put<Dipendente>(`${this.apiServerUrl}/dipendenti/update`, dipendente);
  }

  public deleteDipendente(dipendenteId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/dipendenti/delete/${dipendenteId}`);
  }


}
