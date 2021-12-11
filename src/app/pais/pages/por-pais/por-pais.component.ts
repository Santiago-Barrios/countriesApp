import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class PorPaisComponent {
  termino: string = '';
  thereWasError: boolean = false;
  paises: Country[] = [];
  suggestionCountries: Country[] = [];

  constructor(public paisService: PaisService) {}

  search(termino: string) {
    this.suggestionCountries = [];
    this.thereWasError = false;
    this.termino = termino;
    this.paisService.searchCountry(termino).subscribe(
      (paises) => {
        this.paises = paises;
      },
      (err) => {
        this.thereWasError = true;
        this.paises = [];
      }
    );
    this.termino = '';
  }

  suggestions(termino: string) {
    this.thereWasError = false;
    this.termino = termino;

    this.paisService.searchCountry(termino)
    .subscribe( countries => 
      this.suggestionCountries = countries.splice(0,5),
      (err) => this.suggestionCountries = []
    )

  }
}
