import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/modeles/user';
import { AuthService } from 'src/app/services/auth.service';
declare var $: any; // ADD THIS


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isAuth: boolean;
  private isAuthSub: Subscription;
  private userId: string; 
  private user: User; 

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.isAuthSub = this.auth.isAuth$.subscribe(
      (auth) => {
        this.isAuth = auth;
        this.userId = this.auth.userId;
        console.log(this.userId);
        this.auth.getUserById(this.userId).then(
          (user: User) => {
            this.user = user;
          }
        );
      }
    );
  }

}
