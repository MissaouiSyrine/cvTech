import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PremierService {

  data = ['data1', 'data2', 'data3']
  constructor() { }

  // tslint:disable-next-line: typedef
  logger(data){
    console.log(this.data);
    console.log(data);
  }
  // tslint:disable-next-line: typedef
  addData(data){
    this.data.push(data);
  }

}
