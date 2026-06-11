import { HttpClient } from '@angular/common/http';
import { Component, Inject, LOCALE_ID, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Observable } from 'rxjs';

interface APOD {
  title: string;
  url: string
}

@Component({
    selector: 'app-nasa-apod',
    templateUrl: './nasa-apod.component.html',
    styleUrl: './nasa-apod.component.css',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule]
})
export class NasaApodComponent implements OnInit {

  static URL_BASE = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

  apod$!: Observable<APOD>;

  constructor(private http: HttpClient, @Inject(LOCALE_ID) private locale: string) { }

  ngOnInit(): void {
    this.apod$ = this.http.get<APOD>(NasaApodComponent.URL_BASE);
  }

  dateChange(event: MatDatepickerInputEvent<Date>) {
    if (event.value != null) {
      this.consultar(event.value);
    }
  }

  consultar(date: Date) {
    let url: string = NasaApodComponent.URL_BASE;
    if (date != null) {
      url = `${url}&date=${formatDate(date, "yyyy-MM-dd", this.locale)}`;
    }
    this.apod$ = this.http.get<APOD>(url);
  }

}
