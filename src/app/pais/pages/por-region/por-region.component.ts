import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class PorRegionComponent {
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';
  paises: Country[] = [];

  constructor(public paisService: PaisService) {}

  getClassCss(region: string) {
    return region === this.activeRegion
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activedRegion(region: string) {

    if( region === this.activeRegion ){ return }

    this.activeRegion = region;
    this.paises = [];

      this.paisService.searchByRegion(region)
          .subscribe( paises => {
            this.paises = paises;
          } )

  }
}
