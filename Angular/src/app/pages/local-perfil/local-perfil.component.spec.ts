import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalPerfilComponent } from './local-perfil.component';

describe('LocalPerfilComponent', () => {
  let component: LocalPerfilComponent;
  let fixture: ComponentFixture<LocalPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
