
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personne } from '../../model/personne';
import { CvService } from '../cv.service';


@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.css']
})
export class ListCVComponent implements OnInit {
  public personnes: Personne[] = [];
  constructor(private cvService: CvService) {}
  ngOnInit(): void {
    this.cvService.getPersonnes().subscribe(
      personnes =>  this.personnes = personnes,
      (err) => {
        this.personnes = this.cvService.getPersonnes_stat();
      }
    );
  }
}
