import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { AccordionModule } from 'primeng/accordion';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TabViewModule } from 'primeng/tabview';

const COMPONENTS = [
  ToastModule,
  AccordionModule,
  BrowserModule,
  BrowserAnimationsModule,
  ToastModule,
  ButtonModule,
  PanelMenuModule,
  TabViewModule,
  CommonModule,
];

@NgModule({
  declarations: [],
  imports: [COMPONENTS],
  exports: [COMPONENTS],
})
export class PrimengModule {}
