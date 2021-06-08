import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'CounterAppAngular';
  number:number=10;


  calculate(value: number){
    this.number+=value;
  }

}
