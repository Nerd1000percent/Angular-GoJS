import {
  AfterContentInit,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNG } from 'primeng/config';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuBarComponent, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'gojs-angular';

  constructor(private primeng: PrimeNG) {}
}
