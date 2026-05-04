import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'angular-sudoku';
}
