import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit {
  login: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _authService: AuthService,
    private router: Router,
  ) {
    this.login = this.fb.group({
      correo: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      contrasena: ['', [Validators.pattern('^[a-zA-Z]+$')]]
    });
  }

  ngOnInit(): void {
  }

  loguear() {
    this._authService.postSession(this.login.value.correo, this.login.value.contrasena).subscribe(respuesta => {
      this.router.navigate(['/dashboard']);
    });
  }
}
