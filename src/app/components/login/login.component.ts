import { Component } from '@angular/core';
import { response } from 'express';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private _AuthService: any;
  constructor(private _Router: Router) { }
  error: string = '';
  isLoading: boolean = false;
  loginForm: FormGroup = new FormGroup({

    mobile: new FormControl(null, [Validators.min(0), Validators.required ,Validators.email]),

  }

  );
  submitLoginForm(loginForm: FormGroup) {
    this.isLoading = true;
    this._AuthService.signup(loginForm.value).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        if (response) {
          this._Router.navigate(['/home'])
        }
      }, error: (err: any) => console.log('ERRoR', err),

    });
  }

}

