import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  providers: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input({ required: true }) title!: string;

  constructor(public modalService: ModalService) {}

  onClose() {
    this.modalService.toggleModal();
  }
}
