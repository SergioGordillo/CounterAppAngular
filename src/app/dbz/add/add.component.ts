import { Component, Input} from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent{

  @Input() characters:Character[]=[];

  @Input() new: Character = {
    name:'',
    power:0,
  }

  add(){

      if(this.new.name.trim().length===0){return ;}

      this.characters.push(this.new);
      this.new={
        name:'',
        power: 0,
      }

  }

}
