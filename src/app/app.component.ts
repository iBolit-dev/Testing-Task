import { Component, OnInit} from '@angular/core';
import { CatsService } from "./core/services/cats.service";
import {CatsInterface, SortInterface} from "./core/interfaces/cats-interface";
import {BreedInterface} from "./core/interfaces/breeds-interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'cats';

  public cats: any;
  public allBreeds: any;
  public sortArrCats!: SortInterface[];
  public allBreedsView!: BreedInterface[];
  public arrSort!: { value: string; viewValue: string }[];
  public arrSortBreeds!: { value: string; viewValue: string }[];
  public viewOneBreeds!: BreedInterface[];

  constructor ( private catsServices: CatsService ) {}

  public ngOnInit(): void {
    this.catsServices.getAllBreeds().subscribe((breeds) =>{
      this.allBreeds = breeds;

      let breedsId: string[];
      let breedsName: string[];
      let oldObj!: {value: string; viewValue: string};
      let resultArr: {value: string; viewValue: string}[] = [];

      breedsId = this.allBreeds.map((el: any) => el['id']);

      breedsName = this.allBreeds.map((el: any) => el['name']);

      for (let i = 0; i < breedsId.length; i++) {
        oldObj = {
            value: breedsId[i],
            viewValue: breedsName[i]
          }
        resultArr = [...resultArr, oldObj]
      }
      this.arrSortBreeds = resultArr
    });

    this.arrSort = [
      { value: 'sortByTen', viewValue: '10'},
      { value: 'sortByFive', viewValue: '5'},
      { value: 'sortByTwo', viewValue: '2'}
    ]
  }

  public searchCats(): void {
    this.catsServices.getCatsImg().subscribe( (cats:CatsInterface) => {
      this.cats = cats;
      this.sortArrCats = this.cats;
    });
  }

  public sortByTen(): void {
    this.sortArrCats = this.cats
  }

  public sortByFive(): void {
    this.sortArrCats = this.cats.slice(0, 5)
  }

  public sortByTwo(): void {
    this.sortArrCats = this.cats.slice(0, 2)
  }

  public searchAllBreeds(): void {
    this.allBreedsView = this.allBreeds
  }

  public searchByBreeds(event: string): void {
    this.viewOneBreeds = this.allBreeds.filter((el: any) => el.id === event)
  }
}
