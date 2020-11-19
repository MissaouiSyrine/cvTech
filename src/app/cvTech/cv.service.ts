import { Personne } from './../Model/Personne';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes: Personne [];
  constructor() {
    this.personnes = [
      new Personne (1, 'Missaoui', 'Syrine', 28, 'me2.png', 111111, 'developper' ),
      new Personne (2, 'Joli', 'Angelina', 45, 'angelina.png', 222222, 'Actress' )
    ];
  }
  getPersonnes(): Personne[] {
    return this.personnes;
  }
}
