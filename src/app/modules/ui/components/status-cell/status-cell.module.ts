import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StatusCellComponent } from './status-cell.component';

@NgModule({
  declarations: [StatusCellComponent],
  imports: [CommonModule],
  exports: [StatusCellComponent],
})
export class StatusCellModule {}
