import { Injectable } from '@angular/core';
import { ServicioPadreService } from './servicio-padre.service';

@Injectable({
  providedIn: 'root'
})
export class ServicioHijoCsvService extends ServicioPadreService{

  constructor() {
    super();
  }
}
