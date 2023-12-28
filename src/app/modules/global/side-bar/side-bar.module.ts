import { ButtonModule } from '@ui/components/button';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SideBarComponent } from './side-bar.component';

@NgModule({
  declarations: [SideBarComponent],
  imports: [CommonModule, ButtonModule],
  exports: [SideBarComponent],
})
export class SideBarModule {}
