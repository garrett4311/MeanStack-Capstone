import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
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

  updateUserDetails(): void {
    //console.log(this.productRef.value);
    this.userService.updateUser(this.userRef.value).
    subscribe(data=>this.result=data.msg);
  }
}
