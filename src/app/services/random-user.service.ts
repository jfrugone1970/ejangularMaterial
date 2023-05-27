import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, catchError, throwError, retry } from 'rxjs';
import { IRandomContact  } from '../models/random.user';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private _http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    if(error.status === 0){
      console.error(`Ha ocurrido un error ${error.error}`);

    }else{
      console.error(`Error en el backend: ${error.status}. El error es ${error.error}`)
    }

    return throwError(() => new Error('Error en la peticion de contacto aleatorio')

    );
  }


  obtenerRandomUser(): Observable<any> {

    return this._http.get('https://randomuser.me/api').pipe(
      catchError(this.handleError)

    );



  }


}
