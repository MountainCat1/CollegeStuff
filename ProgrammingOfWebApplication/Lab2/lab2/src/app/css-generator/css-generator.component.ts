import {Component, Input} from '@angular/core';
import {CSS} from "../models/css.model";

@Component({
  selector: 'app-css-generator',
  templateUrl: './css-generator.component.html',
  styleUrls: ['./css-generator.component.scss']
})
export class CssGeneratorComponent {
  cssModel: CSS = { color: '', border: '', 'box-shadow': '', background: '' };

  get css(): string {
    return `
    color: ${this.cssModel.color};
    border: ${this.cssModel.border};
    background: ${this.cssModel.background};
  `;
  }


  onCssChanged(css: CSS): void {
    console.log(css)
    this.cssModel = css;
  }
}
