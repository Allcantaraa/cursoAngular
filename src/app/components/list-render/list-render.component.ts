import { Component, OnInit } from '@angular/core';

import { Animal } from '../../Animal';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-render',
  standalone: false,
  
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent implements OnInit {

  ngOnInit(): void { }
  
  constructor(private listService: ListService){}

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

  removeAnimal(animal: Animal) {
    this.animals = this.listService.remove(this.animals, animal);
  }

}
