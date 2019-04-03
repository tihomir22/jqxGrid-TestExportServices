import { TestBed } from '@angular/core/testing';

import { ServicioHijoCsvService } from './servicio-hijo-csv.service';

describe('ServicioHijoCsvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioHijoCsvService = TestBed.get(ServicioHijoCsvService);
    expect(service).toBeTruthy();
  });
});
