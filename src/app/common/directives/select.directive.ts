import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { TStatesName } from '../types';
import { IParameter } from '../interfaces';
import { LocalStateManagerService } from '../providers/services/local-state-manager.service';

@Directive({
  selector: '[nttSelect]',
  standalone: true,
})
export class SelectDirective implements OnInit {
  @Input() nameParameter: TStatesName | null;
  private options: Array<IParameter>;
  public constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private readonly localStatesManager: LocalStateManagerService,
  ) {
    this.nameParameter = null;
    this.options = [];
  }

  public ngOnInit(): void {
    this.solveAddOptionsToSelect();
  }

  private solveAddOptionsToSelect(): void {
    if (this.nameParameter) {
      this.options = this.localStatesManager.solveGetState<Array<IParameter>>(this.nameParameter) ?? [];
      this.options.forEach((option: IParameter) => {
        const optionElement = this.renderer.createElement('option');
        this.renderer.setProperty(optionElement, 'value', option.value);
        this.renderer.setProperty(optionElement, 'textContent', option.id);
        this.renderer.appendChild(this.el.nativeElement, optionElement);
      });
    }
  }
}
