import { RouterModule, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser, LoginOpt } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: SocialUser;
  loggedIn: boolean;
  router: Router;

  constructor(private authService: AuthService, rota: Router) {
    this.router = rota;
    this.loggedIn = false;
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

  }

  entrar(){
    if(this.loggedIn === true){
    this.router.navigate(['/estoque', this.user.authToken]);
    }
    console.log('Token de autenticação do usuario: ' + this.user.authToken);
  }


}
