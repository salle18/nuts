import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-card',
  templateUrl: 'loading-card.component.html',
  styleUrls: ['loading-card.component.scss']
})
export class LoadingCardComponent {

  @Input() public loading: boolean = false;

  @Input() public title: string = '';

  @Input() public subtitle: string = '';
}
