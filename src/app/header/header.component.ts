import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Globals } from '../globals';
import { User } from '../model.user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  globals: Globals;
  users:Array<User>;
  isAdmin: boolean = false;
  

  constructor(public auth: AuthService, private router: Router, 
    globals: Globals, public userService: UserService) { 
    this.globals = globals;
  }
  ngOnInit(): void {
    this.userService.getUserDetails().subscribe(data=>this.users=data)
  }

  ngDoCheck(): void {
    for(var i=0;i<this.users.length; i++){
      if(this.users[i].email == this.globals.currentUser) {
        if(this.users[i].userType == "Admin") {
          this.isAdmin = true;
          //console.log(this.isAdmin)
        }
        else if(this.users[i].userType == "User") {
          this.isAdmin = false;
          //console.log(this.isAdmin)
        }
      }
    }
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/auth/login'], {queryParams: {loggedOut: 'success'}});
    this.globals.currentUser = '';
    this.globals.shoppingCart = [];
  }

  checkAdmin(): boolean {
    return this.isAdmin;
  }

}
