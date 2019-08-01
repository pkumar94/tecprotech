import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.scss']
})
export class ProfileComponent {
    opened = true;
    constructor(private formBuilder: FormBuilder) { }
    editProfileForm: FormGroup;

    ngOnInit() {

        this.editProfileForm = this.formBuilder.group({
            name: new FormControl('', [Validators.required]),
            contact: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required]),
            address: new FormControl('', [Validators.required])
        })
    }

}
