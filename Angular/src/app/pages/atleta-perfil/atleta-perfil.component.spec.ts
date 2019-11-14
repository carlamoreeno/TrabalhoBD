import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtletaPerfilComponent } from './atleta-perfil.component';

describe('AtletaPerfilComponent', () => {
  let component: AtletaPerfilComponent;
  let fixture: ComponentFixture<AtletaPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtletaPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtletaPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
