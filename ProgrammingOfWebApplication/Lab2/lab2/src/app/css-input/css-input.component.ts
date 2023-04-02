import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CSS} from "../models/css.model";

@Component({
  selector: 'app-css-input',
  templateUrl: './css-input.component.html',
  styleUrls: ['./css-input.component.scss']
})
export class CssInputComponent {
  @Output() cssChange = new EventEmitter<CSS>();
  @Input() css : CSS = {"box-shadow": undefined, background: undefined, border: undefined, color: undefined};
  handleChange() {
    console.log("emmited: ", this.css)

    this.cssChange.emit(this.css);
  }
}
