import { Component } from '@angular/core';
import { ModalComponent } from '../../shared';

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.scss',
})
export class AuthModalComponent {}
