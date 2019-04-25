import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

import { UserService } from '../services/user.service';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aVariable: string = "This is a random string";

  lsLoginKey: string = 'loggedInUser';
  backupUsers: Object[] = [
    { name: 'Beth', id: 1 },
    { name: 'Marianela', id: 2 },
    { name: 'Daniel', id: 3 },
    { name: 'Marcelo', id: 4 }
  ];
  users: Observable<Object> = of(this.backupUsers);

  selected: Object = { name: 'Beth', id: 1 };
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.users().subscribe((res:Object[]) => {
      console.log(res);
      for(let user of res) {
        console.log(user);
        user["name"] = user["username"];
        user["id"] = user["listenerID"];
      }
      this.users = of(res);
    });
  }

  setLoggedInUser(selected) {
    localStorage.setItem(environment.lsLoginKey, JSON.stringify(selected));
    console.log(selected);
  }

}
