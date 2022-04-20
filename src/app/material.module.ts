import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Material Modules */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

const MaterialComponents = [
  BrowserAnimationsModule,
  MatButtonModule,
  MatToolbarModule,
  MatCardModule
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
