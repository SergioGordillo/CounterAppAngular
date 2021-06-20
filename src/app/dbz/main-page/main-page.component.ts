
import { Component} from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{

  constructor(){}

 new: Character = {
  name: "Master Roshi",
  power: 6700
}


  // addNewCharacter(character:Character){
  //   this.characters.push(character);
  // }


}
