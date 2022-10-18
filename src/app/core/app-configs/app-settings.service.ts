import { Injectable } from '@angular/core'; 
import { EndPoints } from './end-points';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  /**
   * @description: End-point auth
   */
  public auth = {
    url: {
      login: EndPoints.urlBase('auth/login'),
      nuevoUsuario: EndPoints.urlBase('auth/nuevo'),
    }
  };

  /**
   * @description: End-point Util
  */
  public util = {
    url: { 
      random: EndPoints.urlBase('random/chiste-chuck'), 
      addFavorito: EndPoints.urlBase('favorito/nuevo'), 
      favorito: EndPoints.urlBase('favorito/'), 
    }
  };
 
}
