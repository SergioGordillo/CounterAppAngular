import { Component} from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';



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

}
