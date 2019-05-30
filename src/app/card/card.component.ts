import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: any;
  @Output() toRemove = new EventEmitter<string>();
  @Output() toEdit = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  removeCard(id: any): void {
    this.toRemove.emit(id);
  }

  editCard(id: any): void {
    this.toEdit.emit(id);
  }

}
