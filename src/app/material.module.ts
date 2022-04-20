import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Material Modules */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

const MaterialComponents = [
  BrowserAnimationsModule,
  MatButtonModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
