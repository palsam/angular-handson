import { Component } from '@angular/core';
import * as Handsontable from 'handsontable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-with-handson';
  dataset: any[] = [
    ['Employeed Name', 'Division', 'Department', 'Dept ID', 'Description'],
    ['Palani', "IT", "Engineering", "123", "Enable Business with IT Solution"],
    ['Kumar', "IT", "Consulting", "125", "Consulting on Technologies"]
  ];
}



