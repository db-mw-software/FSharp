import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.css']
})
export class ConcertComponent implements OnInit {

  concerts$: Observable<Object>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.recommendations().subscribe(res => {
      this.concerts$ = of(res);
    });
  }

}
