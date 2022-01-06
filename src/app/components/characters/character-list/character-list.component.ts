import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CharactersService } from '../shared/characters.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters: any;

    constructor(
      private charactersService: CharactersService,
      private router: Router
      ) {}

    ngOnInit(): void {
        this.getCharacters();
    }

    getCharacters() {
      this.charactersService.getAllCharacters().subscribe(data => this.characters = data.data.results); 
    }

    characterDetails(id: any) {
      this.router.navigate([`characters/details/${id}`])
    }

}
