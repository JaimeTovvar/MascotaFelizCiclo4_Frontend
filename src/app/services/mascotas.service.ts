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
}
