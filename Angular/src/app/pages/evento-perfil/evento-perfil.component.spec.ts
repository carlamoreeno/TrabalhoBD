import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoPerfilComponent } from './evento-perfil.component';

describe('EventoPerfilComponent', () => {
  let component: EventoPerfilComponent;
  let fixture: ComponentFixture<EventoPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
