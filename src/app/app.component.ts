import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {

  userData = {
    email: 'joaquim@email.com',
    role: 'Admin',
  }

  userName = 'Joaquim';

  title = 'curso-angular2';
}
