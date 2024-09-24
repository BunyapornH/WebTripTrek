import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html'
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

    constructor(public layoutService: LayoutService, public router: Router) {
        this.images=this.getData()
    }

    getData() {
        return [
            {
                itemImageSrc: '../../assets/triptrek/images/Taiwan/Taiwan1.jpg',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: '../../assets/triptrek/images/Taiwan/Taiwan2.jpg',
                alt: 'Description for Image 2',
                title: 'Title 2'
            },
            {
                itemImageSrc: '../../assets/triptrek/images/Taiwan/Taiwan3.png',
                alt: 'Description for Image 3',
                title: 'Title 3'
            },
            {
                itemImageSrc: '../../assets/triptrek/images/Taiwan/Taiwan4.jpg',
                alt: 'Description for Image 4',
                title: 'Title 4'
            },
            {
                itemImageSrc: '../../assets/triptrek/images/Taiwan/Taiwan5.jpg',
                alt: 'Description for Image 5',
                title: 'Title 5'
            },
            
        ];
    }
    
}
