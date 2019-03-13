import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardService } from './services/card.service';
import { AuthService } from './services/auth.service';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { NewCardInputComponent } from './new-card-input/new-card-input.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducers';
import { CardsEffects } from './effects/cards.effects';

import { MainComponent } from './main/main.component';

import {Routes, RouterModule} from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_auth.guard';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'cards', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cards', component: MainComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('appState', reducers),
    EffectsModule.forFeature([CardsEffects]),
    RouterModule.forChild(routes),
  ],
  providers: [CardService, AuthService, AuthGuard],
  declarations: [
    CardComponent,
    CardListComponent,
    NewCardInputComponent,
    MainComponent,
    RegisterComponent,
    LoginComponent
  ]
})
export class CardsModule { }
