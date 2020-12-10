import { CvService } from './../../../../../angularGL42020/src/app/cv/services/cv.service';
import { Personne } from './../../Model/Personne';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCVComponent implements OnInit {

  @Input () personne: Personne;
 // @Output () selectedPersonne = new EventEmitter();

  constructor(private cvService: CvService) { }

  ngOnInit(): void {
  }

  selectPersonne(){
    //emmetre un evt et y injecter la personne
   // this.selectedPersonne.emit(this.personne);
   this.cvService.selectPersonne(this.personne);
  }

}
