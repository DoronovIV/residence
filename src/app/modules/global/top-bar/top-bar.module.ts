import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TopBarComponent } from './top-bar.component';

@NgModule({
  declarations: [TopBarComponent],
  imports: [CommonModule],
  exports: [TopBarComponent],
})
export class TopBarModule {}
