import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular-6-social-login';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent {
  hide = true;

  loginFormGroup: FormGroup;
  loginIdFormGroup: FormGroup;
  mobileFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private socialAuthService: AuthService) { }


  ngOnInit() {
    this.loginFormGroup = this.formBuilder.group({
      recaptchaReactive: new FormControl(null, [Validators.required])
    });
    this.loginIdFormGroup = this.formBuilder.group({
      loginId: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });

    this.mobileFormGroup = this.formBuilder.group({
      mobile: new FormControl('', [Validators.required, Validators.pattern("[0-9\g]*$")]),
      otp: new FormControl('', [Validators.required])
    });

  }

  signIn() {
    this.router.navigateByUrl('/dashboard');
  }

  genereateOtp() {
  }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }
    else if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + " sign in data : ", userData);

      }
    );
  }

  disableCaptcha: boolean = false;

  enableCaptcha() {
    this.disableCaptcha = true;
  }
}
