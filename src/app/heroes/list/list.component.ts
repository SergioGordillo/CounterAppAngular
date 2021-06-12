import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})

export class ListComponent  {

  heroes:string[]=['Spiderman', 'Hulk', 'Goku'];
  deletedHeroes:string='';

  deleteHero():string{
    this.deletedHeroes=this.heroes.shift() || '';
    return this.deletedHeroes;
  }

}
