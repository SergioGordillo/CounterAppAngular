import { Component } from "@angular/core";

@Component({
    selector: 'hero-app',
    templateUrl: 'hero.component.html'
})
export class HeroComponent{

    name:string="Spiderman";
    age:number=45;

    get getNameInCapitalLetters():string{
        return this.name.toUpperCase();
    }

    getInfo():string{
        return `This superhero is ${this.name} and his age is of ${this.age} years old`;
    }

    changeName():void{
        this.name="Batman";
    }

    changeAge():void{
        this.age=30;
    }


}