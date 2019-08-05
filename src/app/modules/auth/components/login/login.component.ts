import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { TextValidators } from 'src/app/core/validators/text-validator';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('', TextValidators.required),
    password: new FormControl('', TextValidators.required)
  });

  get f() { return this.form.controls; }

  loginError = '';

  constructor(
    private service: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submit() {
    if (!this.form.valid) { return; }

    this.service.login(this.form.value)
      .pipe(first())
      .subscribe(
        () => {
          this.router.navigate(['/dashboard']);
        },
        error => this.loginError = error
      );
  }

}
