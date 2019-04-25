import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MusicService } from '../services/music.service';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-concertdetail',
  templateUrl: './concertdetail.component.html',
  styleUrls: ['./concertdetail.component.css']
})
export class ConcertdetailComponent implements OnInit {

  concertId: number;
  concertDetails$: Observable<Object>;

  constructor(private activatedRoute: ActivatedRoute, private musicService: MusicService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.concertId = +params.concertId;
      console.log(this.concertId);
      this.musicService.concert(this.concertId).subscribe(res => {
        this.concertDetails$ = of(res);
      })
    });
  }

}
