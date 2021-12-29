import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

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

  apod : APOD = {url:"", title:""};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<APOD>("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY").subscribe((apod : APOD) => {
      this.apod=apod;
    });
  }

}
