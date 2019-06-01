import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card.model';
import * as fromRoot from '../store/index';
import * as cards from '../store/actions/cards.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-main',
  template: `
  <div class="container-fluid text-center pb-5">
    <div class="row justify-content-end">
      <app-new-card-input (toCardAdd)="addCard($event)"></app-new-card-input>
    </div>
  </div>
  <app-card-list (toRemoveCard)="removeCard($event)" (toUpdateCard)="updateCard($event)" [cards]="cards$ | async"></app-card-list>
  `,
  styleUrls: []
})
export class MainComponent implements OnInit {
  public cards$: Observable<Card[]>;

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() {
    this.store.dispatch(new cards.Load());
    this.cards$ = this.store.select(fromRoot.getCards);
  }

  addCard(card: Card) {
    this.store.dispatch(new cards.Add(card));
  }

  removeCard(id: any) {
    this.store.dispatch(new cards.Remove(id));
  }

  updateCard(data: any) {
    this.store.dispatch(new cards.Update(data));
  }

}
