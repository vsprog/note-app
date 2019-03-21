import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  @Input() cards: Array<any>;
  @Output() toRemoveCard = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  toRemove(id: any) {
    this.toRemoveCard.emit(id);
  }

}
