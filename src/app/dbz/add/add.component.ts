import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent{

  @Input() new: Character = {
    name:'',
    power:0,
  }

  constructor(private DbzService:DbzService){}

  add(){

      if(this.new.name.trim().length===0){return ;}

      this.DbzService.addCharacter(this.new);

      this.new={
        name:'',
        power: 0,
      }

  }

}
