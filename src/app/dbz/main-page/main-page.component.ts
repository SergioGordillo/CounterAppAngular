
import { Component} from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';
import { DbzService } from './../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{

  characters: Character[]=[{
    name: "Goku",
    power: 15000
  },
  {
    name: "Vegeta",
    power: 9000
  }
]

  new: Character = {
    name: "Roshi Master",
    power: 6700
}

  addNewCharacter(character:Character){
    this.characters.push(character);
  }

  constructor(private DbzService:DbzService){

  }
}
