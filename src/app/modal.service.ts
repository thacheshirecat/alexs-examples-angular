import { Injectable } from '@angular/core';
import { DomService } from './dom.service';

@Injectable()
export class ModalService {

  constructor(private domService: DomService) { }

  private modalElementId = 'modal-container';
  private overlayElementId = 'modal-overlay'

  init(component: any, inputs: object, outputs: object) {
    let componentConfig = {
      inputs: inputs,
      outputs: outputs
    }
    this.domService.appendComponentTo(this.modalElementId, component, componentConfig);
    document.getElementById(this.modalElementId).className  = 'shown';
    document.getElementById(this.overlayElementId).className  = 'shown';
  }

  destroy()
  {
    this.domService.removeComponent();
    document.getElementById(this.modalElementId).className  = 'hidden';
    document.getElementById(this.overlayElementId).className  = 'hidden';


  }
}
