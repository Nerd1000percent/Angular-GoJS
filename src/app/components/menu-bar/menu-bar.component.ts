import { TableModule, TableRowSelectEvent } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';

import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MenubarModule } from 'primeng/menubar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu-bar',
  imports: [
    TableModule,
    CommonModule,
    ToolbarModule,
    ButtonModule,
    FormsModule,
    ToastModule,
    FormsModule,
    MenubarModule,
    InputTextModule,
  ],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss',
  standalone: true,
})
export class MenuBarComponent implements OnInit {
  items!: MenuItem[];
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => {
          this.router.navigate(['/home']);
        },
      },
      {
        label: 'Features',
        icon: 'pi pi-star',
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Components',
            icon: 'pi pi-bolt',
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server',
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil',
          },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
              {
                label: 'Apollo',
                icon: 'pi pi-palette',
              },
              {
                label: 'Ultima',
                icon: 'pi pi-palette',
              },
            ],
          },
        ],
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
      },
    ];
  }
  toggleDarkMode() {
    const element = document.querySelector('html');
    element?.classList.toggle('my-app-dark');
  }
}
