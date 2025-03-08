import { Component, ViewEncapsulation } from '@angular/core';
import { GojsAngularModule } from 'gojs-angular';
@Component({
  selector: 'app-diagram',
  imports: [GojsAngularModule],
  templateUrl: './diagram.component.html',
  styleUrl: './diagram.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DiagramComponent {}
