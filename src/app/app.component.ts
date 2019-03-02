import { Component, OnInit } from '@angular/core';
import { CardService } from './services/card.service';
import { Observable } from 'rxjs';
import { Card } from './models/card';
import * as fromRoot from './reducers';
import * as cards from './actions/cards';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public cards$: Observable<Card[]>;

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() {
    this.store.dispatch(new cards.Load());
    this.cards$ = this.store.select(fromRoot.getCards);
  }

  addCard(card: Card) {
    this.store.dispatch(new cards.Add(card));
  }

}
