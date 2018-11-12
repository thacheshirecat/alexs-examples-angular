import { Injectable, Injector, ComponentFactoryResolver, EmbeddedViewRef, ApplicationRef } from '@angular/core';

@Injectable()
export class DomService {

  private childComponentRef: any;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  public appendComponentTo(parentId: string, child: any, childConfig?: childConfig) {
    const childComponentRef = this.componentFactoryResolver.resolveComponentFactory(child).create(this.injector);

    this.attachConfig(childConfig, childComponentRef);
    this.childComponentRef = childComponentRef;

    this.appRef.attachView(childComponentRef.hostView);
    const childDomElem = (childComponentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.getElementById(parentId).appendChild(childDomElem);
  }

  public removeComponent() {
    this.appRef.detachView(this.childComponentRef.hostView);
    this.childComponentRef.destroy();
  }

  private attachConfig(config, componentRef) {
    let inputs = config.inputs;
    let outputs = config.outputs;
    for(var key in inputs) {
      componentRef.instance[key] = inputs[key]
    }
    for(var key in outputs) {
      componentRef.instance[key] = outputs[key];
    }
  }
}

interface childConfig{
  inputs:object,
  outputs:object
}
