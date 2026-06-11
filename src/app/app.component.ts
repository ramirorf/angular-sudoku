import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbarComponent } from './shared/app-navbar/app-navbar.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterOutlet, AppNavbarComponent]
})
export class AppComponent {
  title = 'angular-sudoku';
}
