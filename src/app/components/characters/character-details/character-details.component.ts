import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../shared/characters.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  idCharacter: any;
  character: any;
  listComics: any;

  constructor(
    private route: ActivatedRoute,
    private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.idCharacter = this.route.snapshot.paramMap.get('id');
    this.getCharacterDetails();
  }

  getCharacterDetails(): void {
    this.charactersService.getCharatersDetails(this.idCharacter)
      .subscribe(character => {
        this.character = character.data.results[0];
        this.getComics();
      });
  }

  getComics(): void {
    this.charactersService.getListComicsCharacter(this.character?.comics?.collectionURI).subscribe(comics => this.listComics = comics?.data?.results);
  }

  openExternalLink(url: string) {
    window.open(url, '_blank')?.focus();
  }

}
