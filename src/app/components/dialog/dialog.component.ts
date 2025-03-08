import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-dialog',
  imports: [
    FormsModule,
    CommonModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
  standalone: true,
})
export class DialogComponent {
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
