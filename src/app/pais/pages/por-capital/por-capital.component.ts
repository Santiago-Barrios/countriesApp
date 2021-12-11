import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  placeholder: string = 'Buscar Capital ...';
  thereWasError: boolean = false;
  paises: Country[] = [];

  constructor(public paisService: PaisService) {}

  search( termino:string ) {
    this.thereWasError = false;
    this.termino = termino;
    this.paisService.searchCapital(this.termino)
      .subscribe( (paises) => {
        this.paises = paises;
      }, (err) => {
        this.thereWasError = true;
        this.paises = [];
      } );
  }

  suggestions(termino:string){
    this.thereWasError = false;
    //TODO crear sugerencias
  }
}
