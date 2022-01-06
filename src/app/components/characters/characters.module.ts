import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CharactersRoutingModule } from './characters-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CharacterDetailsComponent } from './character-details/character-details.component';

@NgModule({
  declarations: [
  
    CharacterDetailsComponent
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
