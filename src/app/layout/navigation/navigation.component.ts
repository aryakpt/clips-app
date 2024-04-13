import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  constructor(private modalService: ModalService) {}

  setIsModalAuthOpen(event: MouseEvent) {
    this.modalService.toggleModal();
  }
}
