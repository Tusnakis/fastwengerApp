import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FitnessComponent } from './fitness/fitness.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    FitnessComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    FormsModule,
    FitnessComponent,
    HttpClientModule,
    CommonModule
  ]
})
export class SharedModule { }
