import { Component, ViewChild } from '@angular/core';
import {jqxGridComponent} from 'jqwidgets-scripts/jqwidgets-ng/jqxgrid/'
import { ServicioPadreService } from './servicio-padre.service';
import { ServicioHijoPdfService } from './servicio-hijo-pdf.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('dembow') dembow:jqxGridComponent;

  title = 'test-services';
   source = {
    datatype: 'json',
    localdata: this.getDataExample(),
    datafields:
    [
        {
            name: 'balance'
        }
    ]
};
	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
    dataAdapter: any = new jqx.dataAdapter(this.source);
    cellsrenderer = (row: number, columnfield: string, value: string | number, defaulthtml: string, columnproperties: any, rowdata: any): string => {
        if (value < 20) {
            return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #ff0000;">' + value + '</span>';
        }
        else {
            return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #008000;">' + value + '</span>';
        }
    };
    columns: any[] =
    [
        { text: 'Product Name', columngroup: 'ProductDetails', datafield: 'balance', width: 250 },
      
    ];
    columngroups: any[] =
    [
        { text: 'Product Details', align: 'center', name: 'ProductDetails' }
    ];
    constructor(public hijoPdf:ServicioHijoPdfService,public padre:ServicioPadreService){
      
    }

    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      
    }
    ngAfterViewInit(): void {
      //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
      //Add 'implements AfterViewInit' to the class.
      this.padre.setGrid(this.dembow)
      
    }
    public pdfBtnOnClick(){
      this.hijoPdf.pdfBtnOnClick(this.dembow)
      //this.dembow.exportdata('pdf','dembow')
    }

    public getDataExample():Array<any>{
      return[
        {
          "isActive": false,
          "balance": "$3,806.39",
          "picture": "http://placehold.it/32x32",
          "age": 33,
          "eyeColor": "blue",
          "name": "Lewis Clemons",
          "gender": "male",
          "company": "KINETICUT",
          "email": "lewisclemons@kineticut.com",
          "phone": "+1 (845) 474-3204"
        },
        {
          "isActive": false,
          "balance": "$1,335.64",
          "picture": "http://placehold.it/32x32",
          "age": 34,
          "eyeColor": "blue",
          "name": "Joni Mercer",
          "gender": "female",
          "company": "GREEKER",
          "email": "jonimercer@greeker.com",
          "phone": "+1 (944) 547-2935"
        },
        {
          "isActive": true,
          "balance": "$1,953.37",
          "picture": "http://placehold.it/32x32",
          "age": 23,
          "eyeColor": "green",
          "name": "Benson Hess",
          "gender": "male",
          "company": "QUANTALIA",
          "email": "bensonhess@quantalia.com",
          "phone": "+1 (841) 518-2707"
        },
        {
          "isActive": false,
          "balance": "$3,623.67",
          "picture": "http://placehold.it/32x32",
          "age": 20,
          "eyeColor": "green",
          "name": "Jordan Wong",
          "gender": "female",
          "company": "SLAMBDA",
          "email": "jordanwong@slambda.com",
          "phone": "+1 (930) 416-3750"
        },
        {
          "isActive": true,
          "balance": "$2,653.45",
          "picture": "http://placehold.it/32x32",
          "age": 23,
          "eyeColor": "brown",
          "name": "Nanette Bird",
          "gender": "female",
          "company": "COMTEST",
          "email": "nanettebird@comtest.com",
          "phone": "+1 (886) 453-3765"
        }
      ]
    }



}
