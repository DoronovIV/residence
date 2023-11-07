import { ElementRef } from '@angular/core';

import { ColorAdapter } from './color-adapter';
import { Color } from './color.type';
import { ControlClass } from './control-class.type';

export abstract class BaseControl {
  public container!: ElementRef<HTMLElement>;
  public class!: ControlClass;
  public borderColor!: Color;
  protected _style!: CSSStyleDeclaration;
  protected _hidden!: boolean;
  protected _initStyle(): void {
    this._style = this.container.nativeElement.style;

    this.container.nativeElement.classList.add('container', `container--${this.class}`);
    this._style.borderColor = ColorAdapter[this.borderColor];
  }
}
