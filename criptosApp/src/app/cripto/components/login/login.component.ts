import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../user/auth.service';
import { User } from '../../user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  user: User = {login: "", passwd: ""};
  recordar = false;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    if (localStorage.getItem('login')){
      this.user.login = JSON.parse(localStorage.getItem('login')!);
      this.recordar = true;
    }
  }


  login($event: any){


  this.auth.authUser(this.user,this.recordar).subscribe(
  u => {
    console.log(u);
    this.user = u;
  },
  e => console.log(e)
  );
  }

}
