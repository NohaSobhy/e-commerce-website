import { Component } from '@angular/core';
import { response } from 'express';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private _AuthService: any;
  constructor(private _Router: Router) { }

  error: string = '';
  isLoading: boolean = false;
  registerForm: FormGroup = new FormGroup({

    first_name: new FormControl(null, [Validators.minLength(3), Validators.maxLength(20), Validators.required]),
    mobile: new FormControl(null, [Validators.min(0), Validators.required]),
    password: new FormControl(null, [Validators.pattern(/^[A-Z]/), Validators.required]),

  }

  );
  submitRegisterForm(registerForm: FormGroup) {
    this.isLoading = true;
    this._AuthService.signup(registerForm.value).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        if (response) {
          this._Router.navigate(['/login'])
        }
      }, error: (err: any) => console.log('ERRoR', err),

    });
  }

}

