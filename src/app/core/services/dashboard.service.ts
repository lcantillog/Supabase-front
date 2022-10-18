import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { AppSettingsService } from '../app-configs/app-settings.service';
import { Chiste } from '../models/Dashboard.models';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private _appSettings: AppSettingsService,
    private _utilityService: UtilityService
  ) { }


  getChistes() {
    return this._utilityService.getQuery(this._appSettings.util.url.random)
      .pipe(map((res: any) => {
        return res;
      }));
  }


  postAddFavorito(data: Chiste) {
    return this._utilityService.postQuery(this._appSettings.util.url.addFavorito, data)
      .pipe(map((res: any) => {
        return res;
      }));
  }

  getFavorito() {
    return this._utilityService.getQuery(this._appSettings.util.url.favorito)
      .pipe(map((res: any) => {
        return res;
      }));
  }

  deleteFavorito(id: any) {
    return this._utilityService.deleteQuery(this._appSettings.util.url.favorito + id)
      .pipe(map((res: any) => {
        return res;
      }));
  }
}
