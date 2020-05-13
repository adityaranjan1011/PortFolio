import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatProgressBarModule
  ],
  exports:[
    CommonModule,
    MatToolbarModule,
    MatProgressBarModule
  ]
})
export class MaterialModule { }
