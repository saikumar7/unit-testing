import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  users: any[] = [];
  constructor(private userService: UserService) {};
  ngOnInit(): void {
    this.refreshUsers();
  }

  public refreshUsers() {
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
      }
    })
  }

}
