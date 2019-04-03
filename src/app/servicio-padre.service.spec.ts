import { TestBed } from '@angular/core/testing';

import { ServicioPadreService } from './servicio-padre.service';

describe('ServicioPadreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioPadreService = TestBed.get(ServicioPadreService);
    expect(service).toBeTruthy();
  });
});
