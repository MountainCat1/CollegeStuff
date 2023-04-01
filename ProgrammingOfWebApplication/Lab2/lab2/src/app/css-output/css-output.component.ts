import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-css-output',
  templateUrl: './css-output.component.html',
  styleUrls: ['./css-output.component.scss']
})
export class CssOutputComponent {
  @Input() css: string = '';
}
