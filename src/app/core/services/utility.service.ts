import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  icono: SweetAlertIcon = "error";

  constructor(
    // private store: Store<AppState>,
    private _httpClient: HttpClient,
    private router: Router
  ) { }
  /**
  * @description: peticion get
  * @param url: string endpoind
  */
  getQuery(url: string) {
    return this._httpClient.get(url).pipe(catchError(this.handleError));
  }
  /**
   * @description: peticion get
   * @param url: string endpoind
   */
  getPostQuery(url: string, data: any) {
    return this._httpClient.get(url,data).pipe(catchError(this.handleError));
  }

  /**
  * @description: peticion post
  * @param url: string endpoind
  * @param data: json a enviar
  */
  postQuery(url: string, data: any) {
    return this._httpClient.post(url, data).pipe(catchError(this.handleError));
  }

  /**
  * @description: peticion post
  * @param url: string endpoind
  */
  deleteQuery(url: string) {
    return this._httpClient.delete(url).pipe(catchError(this.handleError));
  }

 /**
  * @description: peticion post
  * @param url: string endpoind
  * @param data: json a enviar
  */
  postLogin(url: string, data: any) {
    return this._httpClient.post(url, data).pipe(catchError(this.handleError));
  }

  handleError = (err: any): Observable<HttpEvent<any>> => {

    // this.store.dispatch(actions.stopLoading());
    // debugger;
    let errorMessage = 'No hay respuesta, favor intente nuevamente';
    // console.log("Algo se daño");
    let res: any = {};
    if (err.error instanceof ErrorEvent) {
      errorMessage = `Error: ${err.error.msg}`;
    } else {
      switch (err.status) {
        case 401:
        case 402:
          this.icono = 'warning'
          errorMessage = `Favor coloque los valores del inicio sesión nuevamente`;
          localStorage.clear();
          localStorage.clear();
          setTimeout(() => {
            localStorage.setItem('closeSession', 'true');
            this.router.navigate(['/login'])
          }, 100);
          break;
        case 403:
          errorMessage = `No tiene permiso para ejecutar esta acción`;
          break;
        case 400:
          if (err.error.msg == 'La session ha expirado') {
            localStorage.clear();
            localStorage.clear();
            setTimeout(() => {
              localStorage.setItem('closeSession', 'true');
              this.router.navigate(['/login'])
            }, 100);
          }
          if (
            err.error.msg !== undefined &&
            typeof err.error.msg == 'string'
          ) {
            errorMessage = `${err.error.msg}`;
          }
          break;
        case 404:
          errorMessage = `${err.error.msg}`;
          break;
        case 500:
          errorMessage = `${err.error.msg}`;
          break;
        default:
          errorMessage = `${err.statusText.msg}`;
          break;
      }
    }
    if (err.error !== 'La session ha expirado') {
      if (
        errorMessage != 'undefined' &&
        errorMessage !== undefined &&
        errorMessage != null &&
        errorMessage != '' &&
        errorMessage != 'UNKNOWN ERROR!'
      ) {
        Swal.fire({
          title: 'Error',
          text: errorMessage,
          icon: this.icono,
          confirmButtonText: 'Cerrar',
        }).then();
      } else {
        Swal.fire({
          title: 'Error',
          text: 'No hubo respuesta por parte del servidor, favor intente nuevamente',
          icon: this.icono,
          confirmButtonText: 'Cerrar',
        }).then();
      }
    }
    return throwError(errorMessage);
  };
}
