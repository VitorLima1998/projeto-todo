import { NgModule } from '@angular/core';
import { ToastModule } from 'primeng/toast';

const COMPONENTS = [ToastModule];

@NgModule({
  declarations: [],
  imports: [COMPONENTS],
  exports: [COMPONENTS],
})
export class PrimengModule {}
