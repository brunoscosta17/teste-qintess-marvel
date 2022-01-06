import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersService } from '../shared/characters.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters: any;

    constructor(private charactersService: CharactersService) {}

    ngOnInit(): void {
        this.getCharacters();
    }

    getCharacters() {
      this.charactersService.getAllCharacters().subscribe(data => this.characters = data.data.results); 
    }

}
