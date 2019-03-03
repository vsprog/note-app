import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { StoreModule } from '@ngrx/store';
import {reducers, metaReducers} from './reducers/index';

import { EffectsModule } from '@ngrx/effects';
import { CardsEffects } from './effects/cards.effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { NewCardInputComponent } from './new-card-input/new-card-input.component';
import { CardService } from './services/card.service';
import { environment } from './../environments/environment';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [AppComponent, CardComponent, CardListComponent, NewCardInputComponent, AboutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    EffectsModule.forRoot([CardsEffects]),
    StoreModule.forRoot(reducers, { metaReducers }),
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
