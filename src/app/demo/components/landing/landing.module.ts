import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { StyleClassModule } from 'primeng/styleclass';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { GalleriaModule } from 'primeng/galleria';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';

@NgModule({
    imports: [
        CommonModule,
        LandingRoutingModule,
        DividerModule,
        StyleClassModule,
        PanelModule,
        AvatarModule,
        MenuModule,
        GalleriaModule,
        StepperModule,
        ButtonModule
    ],
    declarations: [LandingComponent]
})
export class LandingModule { }
