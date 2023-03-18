import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-amount-card',
  templateUrl: './amount-card.component.html',
  styleUrls: ['./amount-card.component.css']
})
export class AmountCardComponent {
  @Input() icon: string | undefined;
}
