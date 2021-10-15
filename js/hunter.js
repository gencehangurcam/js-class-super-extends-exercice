import {Human} from './human.js';

export class Hunter extends Human {
  constructor(nom, age, fleches){
    super(nom, age)
    this.fleches = fleches
  }
}

console.log(Hunter);