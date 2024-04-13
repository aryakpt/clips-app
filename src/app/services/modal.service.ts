import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private visible = false;
  constructor() {}

  get isModalOpen() {
    return this.visible;
  }

  toggleModal() {
    this.visible = !this.visible;
  }

  onCloseModal() {
    this.visible = false;
  }
}
