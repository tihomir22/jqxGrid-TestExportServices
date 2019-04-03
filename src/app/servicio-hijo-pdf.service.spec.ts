import { TestBed } from '@angular/core/testing';

import { ServicioHijoPdfService } from './servicio-hijo-pdf.service';

describe('ServicioHijoPdfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioHijoPdfService = TestBed.get(ServicioHijoPdfService);
    expect(service).toBeTruthy();
  });
});
