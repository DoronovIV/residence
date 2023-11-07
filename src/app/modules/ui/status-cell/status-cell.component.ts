import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-status-cell',
  templateUrl: './status-cell.component.html',
  styleUrls: ['./status-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusCellComponent {}
