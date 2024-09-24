import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationComponent } from './documentation.component';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';

@NgModule({
    imports: [
        CommonModule,
        DocumentationRoutingModule,
        AvatarModule,
        MenuModule,
        TabViewModule,
        ButtonModule
    ],
    declarations: [DocumentationComponent]
})
export class DocumentationModule { }
