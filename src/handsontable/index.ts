// This module was fully migrated to Angular 2
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HandsontableCmp} from './handsontable_cmp';
import { HotTableModule } from '@handsontable/angular';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HotTableModule,
    RouterModule.forRoot([
      { path: 'handsontable', component: HandsontableCmp }
    ])
  ],
  declarations: [HandsontableCmp]
})
export class HandsontableNgModule {
}