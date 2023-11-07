import { BaseControl } from 'src/app/model/ui/base-control';
import { Color } from 'src/app/model/ui/color.type';
import { ControlClass } from 'src/app/model/ui/control-class.type';

import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

import { ButtonOptions } from './types/button-options.type';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent extends BaseControl implements AfterViewInit {
  @ViewChild('container')
  public override container!: ElementRef<HTMLElement>;

  @Input()
  public options!: ButtonOptions;

  @Input({ required: true })
  public override borderColor!: Color;

  @Input({ required: true })
  public override class!: ControlClass;

  public ngAfterViewInit(): void {
    this._initStyle();
  }

  protected override _initStyle(): void {
    super._initStyle();

    this.container.nativeElement.classList.add(`${this.options}`);
  }
}
