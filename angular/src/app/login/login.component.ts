import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aVariable: string = "This is a random string";

  lsLoginKey: string = 'loggedInUser';
  users: Object[] = [
    { name: 'Beth', id: 1 },
    { name: 'Marianela', id: 2 },
    { name: 'Daniel', id: 3 },
    { name: 'Marcelo', id: 4 }
  ];

  selected: Object = { name: 'Beth', id: 1 };
  constructor() { }

  ngOnInit() {
  }

  setLoggedInUser(selected) {
    localStorage.setItem(environment.lsLoginKey, JSON.stringify(selected));
    console.log(selected);
  }

}
