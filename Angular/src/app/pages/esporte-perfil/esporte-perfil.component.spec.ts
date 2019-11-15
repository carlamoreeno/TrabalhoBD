import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsportePerfilComponent } from './esporte-perfil.component';

describe('EsportePerfilComponent', () => {
  let component: EsportePerfilComponent;
  let fixture: ComponentFixture<EsportePerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsportePerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsportePerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
