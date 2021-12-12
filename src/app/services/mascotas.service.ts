import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IMascotas } from '../interfaces/mascotas.interface';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  user: IMascotas;

  constructor(private http: HttpClient) { }

  registerMascotas(mascota: IMascotas): Observable<IMascotas> {
    return this.http.post<IMascotas>('http://localhost:3000/mascotas/create', mascota)
      .pipe(
        map((resp: any): any => {
          return resp;
        })
      )
  }

  getMascotas(): Observable<IMascotas[]> {
    return this.http.get<IMascotas[]>(`http://localhost:3000/mascotas`)
      .pipe(
        map((resp: any[]): any[] => {
          return resp;
        })
      )
  }

  getMascotasUser(idUser: string): Observable<IMascotas[]> {
    return this.http.get<IMascotas[]>(`http://localhost:3000/mascotas/user/${idUser}`)
      .pipe(
        map((resp: any[]): any[] => {
          return resp;
        })
      )
  }

  updateMascotas(mascota: IMascotas): Observable<IMascotas> {
    return this.http.put<IMascotas>(`http://localhost:3000/mascotas/${mascota.id}`, mascota)
      .pipe(
        map((resp: any): any => {
          return resp;
        })
      )
  }

  deleteMascotas(id: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/mascotas/${id}`);
  }
}
