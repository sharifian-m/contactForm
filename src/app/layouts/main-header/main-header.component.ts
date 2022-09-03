import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
userlogined!:string;

  constructor(public authService:AuthService,
    private route:Router) { }

  ngOnInit(): void {
this.authService.currentUser$.subscribe(x=>this.userlogined=x);
  }
  signOut(){
    localStorage.removeItem('currentusername');
    localStorage.removeItem('currentuseremail');
    this.authService.setUserAuth('');
this.route.navigate(["/signIn"]);
  }
}
