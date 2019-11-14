import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atleta-perfil',
  templateUrl: './atleta-perfil.component.html',
  styleUrls: ['./atleta-perfil.component.css']
})
export class AtletaPerfilComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  goToPais(){
    return this.router.navigate(['./paises/pais-perfil']);
  }

}
