import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-css-output',
  templateUrl: './css-output.component.html',
  styleUrls: ['./css-output.component.scss']
})
export class CssOutputComponent implements OnInit{
  @Input() css: string = '';

  ngOnInit(): void {

  }
}
