import { EmbaucheService } from './../embauche.service';
import { Personne } from './../../Model/Personne';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCVComponent implements OnInit {
  @Input () personne: Personne;
  constructor(private embaucheService: EmbaucheService) { }

  ngOnInit(): void {
  }
  embaucher(): void{
    this.embaucheService.embaucher(this.personne);
  }
}
