import { Component } from '@angular/core';

import { Animal } from '../../Animal';

@Component({
  selector: 'app-list-render',
  standalone: false,
  
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {

  animals: Animal[] = [
    { name: 'Turca', type: 'Dog', age: 14 },
    { name: 'Tom', type: 'Cat', age: 19 },
    { name: 'Frida', type: 'Dog', age: 4 },
    { name: 'Bob', type: 'Horse', age: 21 },
  ];

  animalDetails = '';

  showAge(animal : Animal): void {
    this.animalDetails = `O pet tem ${animal.age} anos`;
  }

}
