import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import {Md5} from 'ts-md5/dist/md5';

// import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  PUBLIC_KEY = '5a237863b3cc2061003cbbc4fe20dc06';
  PRIVATE_KEY = 'fbf255068eccea6d0ef951b9f25626b57ab2fe72';
  TIME = Number(new Date);
  HASH = Md5.hashStr(this.TIME + this.PRIVATE_KEY + this.PUBLIC_KEY);
  URL_API = `https:gateway.marvel.com/v1/public/characters?ts=${this.TIME}&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<any> {
    return this.http.get<any>(this.URL_API);
  }
    
}