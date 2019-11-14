import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  goToEsportes(){
    return this.router.navigate(['./esportes']);
  }

  goToAtletas(){
    return this.router.navigate(['./atletas']);
  }

  goToPaises(){
    return this.router.navigate(['./paises']);
  }

  goToEventos(){
    return this.router.navigate(['./eventos']);
  }

  goToHome(){
    return this.router.navigate(['./home']);
  }

}
