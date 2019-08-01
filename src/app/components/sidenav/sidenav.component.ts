import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'sidenav',
    templateUrl: 'sidenav.component.html',
    styleUrls: ['sidenav.component.scss']
})
export class SidenavComponent {
    constructor(private router:Router){}

    logout(){
        this.router.navigateByUrl("/login");
    }

}
