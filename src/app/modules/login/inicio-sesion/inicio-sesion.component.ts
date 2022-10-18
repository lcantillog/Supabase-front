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
  formLogin: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _authService: AuthService,
    private router: Router,
  ) {
    this.formLogin = this.fb.group({
      correo: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      contrasena: ['', [Validators.pattern('^[a-zA-Z]+$')]]
    });
  }

  ngOnInit(): void {
  }

  loguear() {
    this._authService.postSession(this.formLogin.value.correo, 
                                  this.formLogin.value.contrasena).subscribe((res:any) => {
      
      if (res) {
        this.router.navigate(['/dashboard']);        
      }
    });
  }

get FormFieldCorreo(){ return this.formLogin.get('correo')}
get FormFieldContrasena(){ return this.formLogin.get('contrasena')}
}
