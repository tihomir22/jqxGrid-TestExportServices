import { Injectable } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ng/jqxgrid/public_api';

@Injectable({
  providedIn: 'root'
})
export class ServicioPadreService {
  protected grid:jqxGridComponent;

  constructor() { }

  public setGrid(grid:jqxGridComponent){
    this.grid=grid;
  }
  public getGrid():jqxGridComponent{
    return this.grid;
  }
}
