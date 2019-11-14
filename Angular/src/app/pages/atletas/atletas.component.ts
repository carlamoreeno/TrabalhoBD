import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-atletas',
  templateUrl: './atletas.component.html',
  styleUrls: ['./atletas.component.css']
})
export class AtletasComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  goToAtletaPerfil(){
    return this.router.navigate(['./atletas/atleta-perfil']);
  }

}
