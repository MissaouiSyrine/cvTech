import { CvService } from './../cv.service';
import { Personne } from './../../Model/Personne';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent implements OnInit {

  personnes: Personne[];
  selectedPersonne: Personne;

  constructor(private cvService: CvService) { }

  ngOnInit(): void {
    this.personnes = this.cvService.getPersonnes() ;
    }
  selectPersonne(personne){
    this.selectedPersonne = personne;
  }

}
