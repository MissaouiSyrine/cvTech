import { Personne } from './../../Model/Personne';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.css']
})
export class ListCVComponent implements OnInit {
@Input () personnes: Personne[];
@Output () selectedPersonne = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  selectPersonne(selectedPersonne){
    console.log(selectedPersonne);
    this.selectedPersonne.emit(selectedPersonne);
  }
}
