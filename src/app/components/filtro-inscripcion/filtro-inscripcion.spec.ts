import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroInscripcion } from './filtro-inscripcion';

describe('FiltroInscripcion', () => {
  let component: FiltroInscripcion;
  let fixture: ComponentFixture<FiltroInscripcion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroInscripcion],
    }).compileComponents();

    fixture = TestBed.createComponent(FiltroInscripcion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
