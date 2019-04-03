import { Injectable } from '@angular/core';
import { ServicioPadreService } from './servicio-padre.service';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ng/jqxgrid/public_api';

@Injectable({
  providedIn: 'root'
})
export class ServicioHijoPdfService extends ServicioPadreService{

  constructor() {
    super();
  }

  pdfBtnOnClick(grid:jqxGridComponent) {
    grid.exportdata('pdf', 'jqxGrid');
};
  
}
