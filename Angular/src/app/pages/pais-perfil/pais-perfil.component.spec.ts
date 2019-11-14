import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisPerfilComponent } from './pais-perfil.component';

describe('PaisPerfilComponent', () => {
  let component: PaisPerfilComponent;
  let fixture: ComponentFixture<PaisPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
