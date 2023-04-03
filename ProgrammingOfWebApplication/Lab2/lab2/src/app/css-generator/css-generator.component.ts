import {Component, Input} from '@angular/core';
import {CSS} from "../models/css.model";

@Component({
  selector: 'app-css-generator',
  templateUrl: './css-generator.component.html',
  styleUrls: ['./css-generator.component.scss']
})
export class CssGeneratorComponent {
  cssModel: CSS = { color: 'red', border: 'solid blue', 'box-shadow': 'black 15px 15px', background: 'green' };

  get css(): string {
    return `
    color: ${this.cssModel.color};
    border: ${this.cssModel.border};
    background: ${this.cssModel.background};
    box-shadow: ${this.cssModel["box-shadow"]}
  `;
  }


  onCssChanged(css: CSS): void {
    console.log(css)
    this.cssModel = css;
  }
}
