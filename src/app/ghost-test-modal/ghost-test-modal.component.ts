import { Component} from '@angular/core';

import { ModalService } from '../modal.service';

@Component({
  selector: 'app-ghost-test-modal',
  templateUrl: './ghost-test-modal.component.html',
  styleUrls: ['./ghost-test-modal.component.css'],
  providers: [ModalService]
})
export class GhostTestModal{

  constructor(private modalService: ModalService) { }

  public close() {
    this.modalService.destroy();
  }

}
