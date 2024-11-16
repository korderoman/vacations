import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ntt-common-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
})
export class BoxComponent {
  @Input() public title: string;
  @Input() public subTitle!: string;
  @Input() public isDisable: boolean;
  @Input() public showBody: boolean;
  @Input() public isCollapsible: boolean;

  constructor() {
    this.title = '';
    this.isDisable = false;
    this.showBody = true;
    this.isCollapsible = false;
  }

  public get boxCssClass(): string {
    let cssClass = '';
    cssClass = this.isDisable ? 'ntt-data-box--disable' : 'ntt-data-box';
    cssClass += ` ${this.isCloseBody()}`;
    return cssClass;
  }

  public onClickToggleBody(): void {
    this.showBody = !this.showBody;
  }

  public evaluateIconStyle(): { [key: string]: string } {
    if (this.showBody) {
      return {
        transition: 'transform 0.25s linear',
        transform: 'rotate(180deg)',
      };
    }
    return {
      transition: 'transform 0.25s linear',
      transform: 'rotate(0deg)',
    };
  }

  private isCloseBody(): string {
    return this.showBody ? '' : 'ntt-data-box--close';
  }
}
