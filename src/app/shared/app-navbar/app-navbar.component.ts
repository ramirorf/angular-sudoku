import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './app-navbar.component.html',
    styleUrl: './app-navbar.component.css'
})
export class AppNavbarComponent {
}
