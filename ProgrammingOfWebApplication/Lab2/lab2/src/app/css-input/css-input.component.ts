import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CSS} from "../models/css.model";

@Component({
  selector: 'app-css-input',
  templateUrl: './css-input.component.html',
  styleUrls: ['./css-input.component.scss']
})
export class CssInputComponent {
  @Input() defaultCss: CSS = { color: 'default', border: '', 'box-shadow': '', background: '' };
  @Output() cssChange = new EventEmitter<CSS>();

  protected css: CSS = this.defaultCss;

  handleChange() {
    console.log("emmited: ", this.css)

    this.cssChange.emit(this.css);
  }
}
