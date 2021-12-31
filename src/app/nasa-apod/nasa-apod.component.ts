import { HttpClient } from '@angular/common/http';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { formatDate } from '@angular/common';

interface APOD {
  title: string;
  url: string
}

@Component({
  selector: 'app-nasa-apod',
  templateUrl: './nasa-apod.component.html',
  styleUrls: ['./nasa-apod.component.css']
})
export class NasaApodComponent implements OnInit {

  static URL_BASE : string ="https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

  profileForm = new FormGroup({
    date: new FormControl(''),
  });

  apod : APOD = {url:"", title:""};
  date : Date = new Date();

  constructor(private http: HttpClient, @Inject(LOCALE_ID) private locale: string) { }

  ngOnInit(): void {
    this.http.get<APOD>(NasaApodComponent.URL_BASE).subscribe((apod : APOD) => {
      this.apod=apod;
    });
  }

  dateChange(event: MatDatepickerInputEvent<Date>) {
    if( event.value != null) {
      this.consultar(event.value);
    }
  }

  consultar(date: Date) {
    let url: string = NasaApodComponent.URL_BASE;
    if(date != null) {
      url = `${url}&date=${formatDate(date, "yyyy-MM-dd", this.locale)}`;
    }
    this.http.get<APOD>(url).subscribe((apod : APOD) => {
      this.apod=apod;
    });
  }

}
