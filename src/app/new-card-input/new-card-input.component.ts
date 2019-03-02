import { Component, OnInit, OnDestroy, Output, EventEmitter, HostListener, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { takeWhile, debounceTime, filter } from 'rxjs/operators';
import { Card } from '../models/card';

@Component({
  selector: 'app-new-card-input',
  templateUrl: './new-card-input.component.html',
  styleUrls: ['./new-card-input.component.scss'],
  host: {'class': 'col-4'}
})
export class NewCardInputComponent implements OnInit, OnDestroy  {
  public newCard: any = {text: ''};
  @Output() oCardAdd = new EventEmitter<Card>();
  // @ViewChild('form') public form: NgForm;
  newCardForm: FormGroup;
  private alive = true;

  constructor(fb: FormBuilder) {
    this.newCardForm = fb.group({
      'text': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
    });

    this.newCardForm.valueChanges.pipe(
        filter((value) => this.newCardForm.valid),
        debounceTime(500),
        takeWhile(() => this.alive)
      ).subscribe(data => {
        console.log(data);
      });
  }

  ngOnInit() {
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.code === 'Enter' && this.newCardForm.valid) {
      this.addCard(this.newCardForm.controls['text'].value);
    }
  }

  addCard(text) {
    this.oCardAdd.emit(new Card(text));
    this.newCardForm.controls['text'].setValue('');
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
