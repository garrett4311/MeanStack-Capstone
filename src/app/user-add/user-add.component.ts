import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  userRef = new FormGroup({
    username: new FormControl(),
    userType: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  })

  constructor(public userService:UserService) { }
  result:string;
  ngOnInit(): void {
  }

  addUser(): void {
    //console.log(this.productRef.value);
    this.userService.addUser(this.userRef.value).
    subscribe(data=>this.result=data.msg);
  }
}
