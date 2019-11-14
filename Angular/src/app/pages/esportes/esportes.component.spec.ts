import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsportesComponent } from './esportes.component';

describe('EsportesComponent', () => {
  let component: EsportesComponent;
  let fixture: ComponentFixture<EsportesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsportesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
