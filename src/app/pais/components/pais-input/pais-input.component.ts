import { Component, Output, OnInit, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [],
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';

  debuoncer: Subject<string> = new Subject();

  termino: string = '';

  search() {
    this.onEnter.emit(this.termino);
  }

  constructor() {}

  ngOnInit() {
    this.debuoncer
    .pipe( debounceTime(300) )
    .subscribe((valor) => {
      this.onDebounce.emit( valor );
    });
  }

  pressKey() {
    this.debuoncer.next(this.termino);
  }
}
