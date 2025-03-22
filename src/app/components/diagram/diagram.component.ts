import { Component, ViewEncapsulation } from '@angular/core';
import go from 'gojs';
import { GojsAngularModule } from 'gojs-angular';
import { init, initPalette } from './diagram-init';
@Component({
  selector: 'app-diagram',
  imports: [GojsAngularModule],
  templateUrl: './diagram.component.html',
  styleUrl: './diagram.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DiagramComponent {
  constructor() {
    this.dia = this.initDiagram();
  }
  dia!: go.Diagram;
  // Big object that holds app-level state data
  // As of gojs-angular 2.0, immutability is required of state for change detection
  public state = {
    // Diagram state props

    skipsDiagramUpdate: false,

    // Palette state props
  }; // end state object

  public diagramDivClassName: string = 'myDiagramDiv';
  public paletteDivClassName = 'myPaletteDiv';

  // initialize diagram / templates
  public initDiagram(): go.Diagram {
    this.dia = init();
    this.dia.themeManager.changesDivBackground = true;

    this.dia.themeManager.currentTheme = 'dark';
    return this.dia;
  }

  /**
   * Handle GoJS model changes, which output an object of data changes via Mode.toIncrementalData.
   * This method should iterate over thoe changes and update state to keep in sync with the FoJS model.
   * This can be done with any preferred state management method, as long as immutability is preserved.
   */
  public diagramModelChange = function (changes: go.IncrementalData) {
    console.log(changes);
    // see gojs-angular-basic for an example model changed handler that preserves immutability
    // when setting state, be sure to set skipsDiagramUpdate: true since GoJS already has this update
  };

  public initPalette(): go.Palette {
    const palette = initPalette();
    return palette;
  }

  public changeTheme2() {
    console.log('changing theme');
    this.dia = this.initDiagram();
    this.dia.themeManager.currentTheme = 'light';
    //  this.dia.themeManager.currentTheme === 'dark' ? 'light' : 'dark';
  }
}
