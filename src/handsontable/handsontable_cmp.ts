import {Component} from '@angular/core';
import Handsontable from 'handsontable';

//For future use
//<hot-table licenseKey="non-commercial-and-evaluation" [data]="data" [colHeaders]="true" [rowHeaders]="true" [width]="600" [height]="300"></hot-table>

@Component({
  selector: 'handsontable',
  template: `
    This is angular component 
    <br>
    <br>
    Handsontable
    <br>
    <div class="hot">
    <hot-table licenseKey="non-commercial-and-evaluation" [settings]="hotSettings"></hot-table>
    <button (click)="Save()">Save</button>
  </div>
  <br>
    <a routerLink="../">Back</a>
  `
})
export class HandsontableCmp {

    hotSettings: Handsontable.GridSettings = {
      data:
        [
          ['2018', 10, 11, 12, 13,''],
          ['2019', 10, 11, 12, 13,''],
          ['2020', 20, 11, 14, 13,''],
          ['2021', 30, 15, 12, 13,'']
        ],
      columns: [
        {},
        {},
        {},
        {},
        {},
        {
          renderer: function(instance, td, row, col, prop, value, cellProperties) {
            Handsontable.renderers.TextRenderer.apply(this, arguments);
            let btn=null;
            btn = document.createElement('button');
            btn.innerHTML='Delete';
            btn.onclick=function(){             
               return instance.alter("remove_row", row);
            }
            Handsontable.dom.empty(td);
            td.appendChild(btn);
            return td;
          }
        }
      ],
      colHeaders: true,
      rowHeights: 30
    };

    Save(){
      alert('Saved');
    }
}