import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { Error404Component } from './components/404.component';
import { getDynamicComponent } from './decorators/dynamic-component.decorator';
import { DynamicComponentDirective } from './directives/dynamic-component.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild(DynamicComponentDirective, { static: true }) dynamicComponent!: DynamicComponentDirective;

  options = [
    {
      component: "MyButtonComponent",
      value: 'Button',
      data: { value: 'Me aperte!' }
    },
    {
      component: "MyInputComponent",
      value: 'Input',
      data: { placeholder: 'Meu querido diário...' }
    },
    {
      component: "MyLogoComponent",
      value: 'Logo',
      data: { src: '/assets/logo.png' }
    }
  ]

  selected: any = this.options[0];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent(this.selected);
  }

  loadComponent({ component, data }: { component: any, data: any }) {

    const componentClass = getDynamicComponent(component) || Error404Component;

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass);

    const viewContainerRef = this.dynamicComponent.viewContainerRef;

    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<any>(componentFactory);

    componentRef.instance.data = data;

  }

  onChange({ target }: any) {
    this.selected = this.options.find(o => o.value === target.value);
    console.log(this.selected);
    this.loadComponent(this.selected);
  }

  onTypeUpdate() {
    this.loadComponent(this.selected);
  }

  updateOptions({ target }: any) {
    try {
      this.options = JSON.parse(target.value);
    } catch (e) {
      console.error(e)
    } finally {
      console.log(target);
    }
  }

}
