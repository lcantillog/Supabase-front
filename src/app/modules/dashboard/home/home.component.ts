import { Component, OnInit } from '@angular/core';
import { Chiste } from 'src/app/core/models/Dashboard.models';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  chistes: Chiste[] | undefined;
  favoritos: Chiste[] | undefined;
  chiste: Chiste = {
    idChuckNorris: '',
    iconoUrl: '',
    urlChuckNorris: '',
    valorChuckNorris: '',
  };
  getJokes: boolean = false;
  myJokes: boolean = false;
  constructor(
    private _dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
  }


  getChiste() {
    this.getJokes = false;
    this.myJokes = false;
    this._dashboardService.getChistes().subscribe(resp => {
      this.chiste = resp.data;
      this.getJokes = true;
    })
  }

  addFavorito() {
    this._dashboardService.postAddFavorito(this.chiste).subscribe(resp => {
      if (resp.status = 200) {
        Swal.fire(
          'Registro',
          resp.msg,
          'success'
        )
      }
    })
  }

  getFavorito() {
    this.getJokes = false;
    this.myJokes = false;
    this._dashboardService.getFavorito().subscribe(resp => {
      this.favoritos = resp.data;
      this.myJokes = true;
    })
  }

  deleteFavorito(id:any) {
    this._dashboardService.deleteFavorito(id).subscribe(resp => {
      if (resp.status = 200) {
        Swal.fire(
          'Registro',
          resp.msg,
          'success'
        )
        this.getFavorito();
      }
    })
  }
}
