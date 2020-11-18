import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { User } from '../model.user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-retrieve',
  templateUrl: './user-retrieve.component.html',
  styleUrls: ['./user-retrieve.component.css']
})
export class UserRetrieveComponent implements OnInit {
  users:Array<User>;
  constructor(public userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUserDetails().subscribe(data=>this.users=data);
  }

}
