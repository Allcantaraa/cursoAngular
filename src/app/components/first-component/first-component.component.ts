import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: false,
  
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent implements OnInit {

  name: string = 'Matheus';
  hobbies = ['Correr', 'Jogar'];

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
