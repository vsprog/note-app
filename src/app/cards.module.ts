import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardService } from './services/card.service';
import { AuthService } from './services/auth.service';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { NewCardInputComponent } from './new-card-input/new-card-input.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducers';
import { CardsEffects } from './effects/cards.effects';
import { UserEffects } from './effects/user.effects';

import { environment } from './../environments/environment';
import { MainComponent } from './main/main.component';

import {Routes, RouterModule} from '@angular/router';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path: '', redirectTo: 'cards', pathMatch: 'full'},
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  { path: 'cards', component: MainComponent}// , canActivate: [AuthGuard]/*,  resolve: { data: CardsResolver}*/ },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('appState', reducers),
    EffectsModule.forFeature([CardsEffects, UserEffects]),
    RouterModule.forChild(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [CardService, AuthService],
  declarations: [
    CardComponent,
    CardListComponent,
    NewCardInputComponent,
    MainComponent,
    RegisterComponent
  ]
})
export class CardsModule { }
