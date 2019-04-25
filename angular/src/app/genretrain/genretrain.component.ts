import { Component, OnInit } from '@angular/core';

import { of, Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { MusicService } from '../services/music.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-genretrain',
  templateUrl: './genretrain.component.html',
  styleUrls: ['./genretrain.component.css']
})
export class GenretrainComponent implements OnInit {

  offlineTesting: boolean = false;
  genres$: Observable<Object>;
  hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e"];

  colors: Array<string> = ["#159957, #155799",
    "#f2994a, #f2c94c",
    "#eb5757, #000000",
    "#e44d26, #f16529",
    "#b2fefa, #0ed2f7",
    "#d66d75, #e29587",
    "#20002c, #cbb4d4",
    "#34e89e, #0f3443",
    "#de6161, #2657eb"];

  constructor(private musicService: MusicService, private userService: UserService) { }

  ngOnInit() {
    if (this.offlineTesting) {
      this.genres$ = this.sampleGenresResponse();
      console.log(this.genres$);
    } else {
      this.musicService.genres().subscribe((response: Object[]) => {
        // for (let genre of response) {
        //   genre["color"] = this.getRandomGradient();
        // }
        this.genres$ = of(response);
        console.log(response);
      });
    }
  }

  toggleSelected(genre) {
    genre["selected"] = !genre["selected"];
    console.log(genre);
    this.postGenrePreference(genre.genreID, genre.selected);
  }

  postGenrePreference(genreId, like) {
    const user = JSON.parse(localStorage.getItem(environment.lsLoginKey));
    this.userService.saveGenre(user.id, genreId, like).subscribe(res => {
      console.log(res);
    });
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
