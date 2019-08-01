import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'headernav',
    templateUrl: 'headernav.component.html',
    styleUrls: ['headernav.component.scss']
})
export class HeadernavComponent {
    constructor(private router: Router) { }
    logout() {
        this.router.navigateByUrl('/login');
    }
}
