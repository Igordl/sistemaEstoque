import { RouterModule, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser, LoginOpt } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: SocialUser;
  loggedIn: boolean;
  router: Router;
  loginService: LoginService;

  constructor(private authService: AuthService, rota: Router, loginService: LoginService) {
    this.router = rota;
    this.loggedIn = false;
    this.loginService = loginService;
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);

     }


  signOut(): void {
    this.authService.signOut();
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
    this.loginService.login(this.user.authToken);

  }

  entrar(){

    if(this.loggedIn === true){
    this.router.navigate(['/estoque']);
    }
    console.log('Token de autenticação do usuario: ' + this.user.authToken);
  }


}
