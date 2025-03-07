import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNG } from 'primeng/config';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HomeComponentComponent } from "./components/home-component/home-component.component";
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuBarComponent, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None

})
export class AppComponent implements OnInit {
  title = 'gojs-angular';

  constructor(private primeng: PrimeNG) {}

  ngOnInit() {
      this.primeng.ripple.set(true);
      const darkMode = localStorage.getItem('darkMode');
      const element = document.querySelector('html');

      if (darkMode === 'true') {
        element?.classList.add('my-app-dark');
      }
  }
  toggleDarkMode() {
    const element = document.querySelector('html');
    element?.classList.toggle('my-app-dark');

    // Apply your dark mode styles directly
    if (element?.classList.contains('my-app-dark')) {
      document.body.style.backgroundColor = '#333';
      document.body.style.color = '#fff';
    } else {
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#000';
    }}
}
