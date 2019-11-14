import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  goToEventoPerfil(){
    return this.router.navigate(['./eventos/evento-perfil']);
  }
}
