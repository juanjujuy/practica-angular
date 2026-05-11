import { TestBed } from '@angular/core/testing';

import { Incripcion } from './incripcion';

describe('Incripcion', () => {
  let service: Incripcion;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Incripcion);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
