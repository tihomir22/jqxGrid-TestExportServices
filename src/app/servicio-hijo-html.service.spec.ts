import { TestBed } from '@angular/core/testing';

import { ServicioHijoHtmlService } from './servicio-hijo-html.service';

describe('ServicioHijoHtmlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioHijoHtmlService = TestBed.get(ServicioHijoHtmlService);
    expect(service).toBeTruthy();
  });
});
