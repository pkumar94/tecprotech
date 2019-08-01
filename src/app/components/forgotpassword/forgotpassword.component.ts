import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'forgotpassword',
    templateUrl: 'forgotpassword.component.html',
    styleUrls: ['forgotpassword.component.scss']
})
export class ForgotpasswordComponent {
    forgotFormGroup:FormGroup;
    constructor(private formBuilder:FormBuilder){
    }
    ngOnInit(){
        this.forgotFormGroup = this.formBuilder.group({
            forgotEmail: new FormControl('', [Validators.required,
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                ]),
        });
    }
}
