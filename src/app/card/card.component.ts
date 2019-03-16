import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../store/index';
import * as cards from '../store/actions/cards';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: any;

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() {}

  removeCard(event: MouseEvent): void {
    this.store.dispatch(new cards.Remove(this.card.$key));
  }

}
