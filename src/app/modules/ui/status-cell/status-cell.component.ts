import { BaseControl } from 'src/app/model/ui/base-control';

import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-status-cell',
  templateUrl: './status-cell.component.html',
  styleUrls: ['./status-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusCellComponent extends BaseControl {
  @ViewChild('container')
  public override container!: ElementRef<HTMLElement>;
}
