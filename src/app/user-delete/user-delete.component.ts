import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  constructor(public userService:UserService) { }
  result:string;
  ngOnInit(): void {
  }

  deleteUserByName(userName) {
    this.userService.deleteUser(userName).
    subscribe(data=>this.result=data.msg);
  }
}
