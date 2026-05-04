import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink, RouterOutlet]
})
export class AppComponent {
  title = 'angular-sudoku';
}
