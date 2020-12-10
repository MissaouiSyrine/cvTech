import { EmbaucheService } from './../embauche.service';
import { Personne } from './../../Model/Personne';
import { Component, Input, OnInit } from '@angular/core';
import { CvService } from '../cv.service';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCVComponent implements OnInit {
  @Input () personne: Personne;
  constructor(
    private embaucheService: EmbaucheService,
    private cvService: CvService) { }

  ngOnInit(): void {this.cvService.selectPersonneSubject
    .pipe(distinctUntilChanged())
    .subscribe((personne) => (this.personne = personne));
  }
  embaucher(): void{
    this.embaucheService.embaucher(this.personne);
  }
}
