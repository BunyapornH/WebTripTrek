import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationComponent } from './documentation.component';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';

@NgModule({
    imports: [
        CommonModule,
        DocumentationRoutingModule,
        AvatarModule,
        MenuModule
    ],
    declarations: [DocumentationComponent]
})
export class DocumentationModule { }
