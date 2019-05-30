import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  @Input() card: Card;
  editorForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.editorForm = fb.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  trySave(formData: any) {
    // this.toRegister.emit(formData);
  }

}
