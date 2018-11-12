import { Component } from '@angular/core';

import { ModalService } from '../modal.service';
import { GhostTestModal } from '../ghost-test-modal/ghost-test-modal.component';
import { DomService } from '../dom.service';

@Component({
  selector: 'app-ghosts',
  templateUrl: './ghosts.component.html',
  styleUrls: ['./ghosts.component.css'],
  providers: [ModalService, DomService]
})
export class GhostsComponent{

  constructor(private modalService: ModalService) { }

  initTestModal() {
    let inputs = {
      isMobile: false
    }
    this.modalService.init(GhostTestModal, inputs, {});
  }
}
