import { Component, Input } from '@angular/core';
import { DynamicComponent } from '../decorators/dynamic-component.decorator';

@DynamicComponent("MyLogoComponent")
@Component({
    template: `
    <img src="/assets/logo.png"/>`,
    styles: [`
        img {
            height: 196px;
        }
    `]
})

export class MyLogoComponent {
    @Input() data: any;
}