import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from '../../services/service.index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {


  usuario: Usuario;

  constructor( public _usuarioService: UsuarioService ) {}

  ngOnInit(): void {
    this.usuario = this._usuarioService.usuario;
  }

}
