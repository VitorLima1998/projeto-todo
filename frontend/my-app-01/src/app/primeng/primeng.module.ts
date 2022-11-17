import { NgModule } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { AccordionModule } from 'primeng/accordion';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
const COMPONENTS = [
  ToastModule,
  AccordionModule,
  BrowserModule,
  BrowserAnimationsModule,
  ToastModule,
  ButtonModule,
];

@NgModule({
  declarations: [],
  imports: [COMPONENTS],
  exports: [COMPONENTS],
})
export class PrimengModule {}
