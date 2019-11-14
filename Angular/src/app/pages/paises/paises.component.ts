import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  goToPaisPerfil(){
    return this.router.navigate(['./paises/pais-perfil']);
  }

}
