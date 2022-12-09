import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CatsInterface } from "../interfaces/cats-interface";

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getCatsImg(): Observable<CatsInterface> {
    return this.httpClient.get<CatsInterface>('https://api.thecatapi.com/v1/images/search?limit=10');
  }


  public getAllBreeds(): Observable<CatsInterface> {
    return this.httpClient.get<CatsInterface>('https://api.thecatapi.com/v1/breeds');
  }
}
