import { Component, Input } from '@angular/core';
import { DynamicComponent } from '../decorators/dynamic-component.decorator';

@DynamicComponent("MyInputComponent")
@Component({
    template: `
    <input
    [style.color]="data.color || '#000'"
    [style.background]="data.background || '#fff'"
    [style.borderColor]="data.borderColor || '#000'"
    [placeholder]="data.placeholder || ''"
    />`,
    styles: [`
        input {
            width: 90%;
            height: 4rem;
            border: 1px solid #000;
            background: #fff;
            font-size: 2.5rem;
        }
    `]
})

export class MyInputComponent {
    @Input() data: any;
}