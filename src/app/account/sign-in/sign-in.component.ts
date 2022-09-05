import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/servises/auth.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm!:FormGroup;
  constructor( private authservice:AuthService ,
    private route:Router) { }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
   
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      
    });
  }
  submitForm() {
    console.log(this.signInForm.value);
 
    const userEmail=this.signInForm.get('email')?.value
    localStorage.setItem(
      'currentuseremail',
      userEmail
    );
  
    this.authservice.setUserAuth(userEmail);
    this.route.navigate(["/home"])
  }
}
