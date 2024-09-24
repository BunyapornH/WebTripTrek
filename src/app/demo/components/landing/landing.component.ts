import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { GalleriaModule } from 'primeng/galleria';
import { StepperModule } from 'primeng/stepper';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html'
    standalone: true,
    imports: [StepperModule]
})
export class LandingComponent {
    images: any[] | undefined;

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(public layoutService: LayoutService, public router: Router) {}
    
}
