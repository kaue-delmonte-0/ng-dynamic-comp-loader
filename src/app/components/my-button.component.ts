import { Component, Input } from '@angular/core';
import { DynamicComponent } from '../decorators/dynamic-component.decorator';

@DynamicComponent("MyButtonComponent")
@Component({
    template: `
    <button
    (click)="onClick()"
    >
        {{data?.value || 'Botão'}}
    </button>`,
    styles: [`
        button {
            width: auto;
            height: 4rem;
            padding: 0 1rem;
            border: 1px solid #000;
            background: #fff;
            font-size: 2.5rem;
            cursor: pointer;
            transition: .15s;
        }
        button:hover {
            opacity: .5;
            transition: .15s;
        }
    `]
})

export class MyButtonComponent {
    @Input() data: any;
    onClick() { alert("Clicked!") }
}