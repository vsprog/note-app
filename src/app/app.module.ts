import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AuthGuard } from './_auth.guard';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { NewCardInputComponent } from './new-card-input/new-card-input.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './store/index';
import { UserEffects } from './store/effects/user.effects';
import { CardsEffects } from './store/effects/cards.effects';
import { AuthService } from './services/auth.service';
import { CardService } from './services/card.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from 'src/environments/environment';
import { routes } from './app.routing';
import { EditorComponent } from './editor/editor.component';


@NgModule({
  providers: [ CardService, AuthService, AuthGuard ],
  declarations: [
    AppComponent,
    AboutComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    CardComponent,
    CardListComponent,
    NewCardInputComponent,
    EditorComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {useHash: true}),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([UserEffects, CardsEffects]),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
