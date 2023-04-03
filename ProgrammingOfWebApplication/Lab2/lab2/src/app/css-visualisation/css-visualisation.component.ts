import {Component, Input} from '@angular/core';
import {CSS} from "../models/css.model";

@Component({
  selector: 'app-css-visualisation',
  templateUrl: './css-visualisation.component.html',
  styleUrls: ['./css-visualisation.component.scss']
})
export class CssVisualisationComponent {
  @Input() css!: CSS;

  getStyle() {
    return {
      'color': this.css.color,
      'border': this.css.border,
      'box-shadow': this.css['box-shadow'],
      'background': this.css.background
    };
  }
}
