import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  @Input() cards: Array<any>;
  @Output() toRemoveCard = new EventEmitter<string>();
  @Output() toUpdateCard = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  toRemove(id: any) {
    this.toRemoveCard.emit(id);
  }

  toUpdate(data: any) {
    this.toUpdateCard.emit(data);
  }

}
