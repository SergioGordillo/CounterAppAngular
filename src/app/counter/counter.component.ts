import { Component  } from "@angular/core";

@Component({
    selector: 'counter-app',
    template: `
        <h1>{{title}}</h1>

        <h3> The basis is <strong>{{basis}}</strong></h3>

        <button (click)="calculate(basis)">{{basis}}</button>

        <span>{{number}}</span>

        <button (click)="calculate(-basis)">-{{basis}}</button>

`

})
export class CounterComponent{

    title:string = 'CounterAppAngular';
    number:number=10;
    basis: number=5; 
  
  
    calculate(value: number){
      this.number+=value;
    }
}
