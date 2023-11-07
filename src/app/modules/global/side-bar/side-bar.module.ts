import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonModule } from '../../ui/button/button.module';
import { SideBarComponent } from './side-bar.component';

@NgModule({
  declarations: [SideBarComponent],
  imports: [CommonModule, ButtonModule],
  exports: [SideBarComponent],
})
export class SideBarModule {}
