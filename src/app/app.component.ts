import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  authStatus: boolean;

  constructor(private authService: AuthService,
              private route: Router) { }

  ngOnInit() {
    console.log(this.authService.user['login']);
    this.authStatus = this.authService.isAuth;
  }

  onSignOut(){
    console.log("Déconnexion réussie");
    this.authService.signOut();
    this.route.navigate(['auth']);
  }
}