import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Personne } from '../model/personne';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CvService {
  selectPersonneSubject = new Subject<Personne>();
  personnes: Personne[] = [];
  constructor(
    private http: HttpClient
  ) {
    this.personnes = [
      new Personne(1, 'Missaoui', 'Syrine', 28, 'Fullstack Dev', 123456, 'me2.jpg'),
      new Personne(2, 'sellaouti2', 'aymen2' , 38, 'teacher2', 123456, ''),
      new Personne(2, 'sellaouti2', 'aymen2', 38, 'teacher2', 123456, '                 '),
    ];
  }
  getPersonnes_stat(): Personne[]{
    return this.personnes;
  }
  getPersonnes(): Observable<Personne[]>{
    return this.http.get<Personne[]>('https://immense-citadel-91115.herokuapp.com/api/personnes');
  }

  selectPersonne(personne: Personne): void {
    this.selectPersonneSubject.next(personne);
  }
}
