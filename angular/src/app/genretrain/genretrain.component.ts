import { Component, OnInit } from '@angular/core';

import { of, Observable } from 'rxjs';

import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-genretrain',
  templateUrl: './genretrain.component.html',
  styleUrls: ['./genretrain.component.css']
})
export class GenretrainComponent implements OnInit {

  offlineTesting: boolean = false;
  genres$: Observable<Object>;
  hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e"];

  constructor(private musicService: MusicService) { }

  ngOnInit() {
    if (this.offlineTesting) {
      this.genres$ = this.sampleGenresResponse();
      console.log(this.genres$);
    } else {
      this.musicService.genres().subscribe((response: Object[]) => {
        for (let genre of response) {
          genre["color"] = this.getRandomGradient();
        }
        this.genres$ = of(response);
        console.log(response);
      });
    }
  }

  toggleSelected(genre) {
    genre["selected"] = !genre["selected"];
    console.log(genre);
  }

  getRandomGradient() {
    const newColor1 = this.getRandomColor('#');
    const newColor2 = this.getRandomColor('#');
    const angle = 45;

    return "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";
  }

  getRandomColor(a) {
    for (var i = 0; i < 6; i++) {
      var x = Math.round(Math.random() * 14);
      var y = this.hexValues[x];
      a += y;
    }
    return a;
  }

  sampleGenresResponse(): Observable<Object> {
    const response = `[
      {
        "gcount": 100,
        "genreID": 1,
        "name": "Rock"
      },
      {
        "gcount": 54,
        "genreID": 2,
        "name": "Alternative"
      },
      {
        "gcount": 20,
        "genreID": 3,
        "name": "Electronic"
      }
    ]`;
    return of(<Object>JSON.parse(response));
  }
}
