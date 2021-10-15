import {Human} from './human.js';

class Warrior extends Human {
  constructor(nom, age, force, vie){
    super(nom, age)
    this.force = force
    this.vie = vie
  }
}