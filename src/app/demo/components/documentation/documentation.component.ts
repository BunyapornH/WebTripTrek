import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    templateUrl: './documentation.component.html',
    styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent { 
    menus: MenuItem[] | undefined;
    
    ngOnInit() {
        this.menus = [
            {
                label: 'Profile',
                icon: 'pi pi-user',
                routerLink: '/documentation'
            },
            {
                label: 'Home',
                icon: 'pi pi-home',
                routerLink: '/'
            }
        ];
    }
}