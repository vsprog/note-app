import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  editorForm: FormGroup;
  @Output() toUpdate = new EventEmitter<any>();
  private cardId: string;

  constructor(private fb: FormBuilder) {
    this.editorForm = fb.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  trySave(formData: any) {
    const { title, content } = formData;
    this.toUpdate.emit({key: this.cardId, value: new Card(title, content)});
  }

  initFormData(card: Card): void {
    this.cardId = card.$key;
    this.editorForm.controls['title'].setValue(card.title);
    this.editorForm.controls['content'].setValue(card.content);
  }

}
