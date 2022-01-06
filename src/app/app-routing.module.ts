import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsComponent } from './components/characters/character-details/character-details.component';
import { CharacterListComponent } from './components/characters/character-list/character-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full'},
  { path: 'characters', component: CharacterListComponent },
  { path: '', loadChildren: () => import('./components/characters/characters.module').then(m => m.CharactersModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
