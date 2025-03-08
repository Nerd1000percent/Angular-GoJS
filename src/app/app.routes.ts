import { Routes } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { DiagramComponent } from './components/diagram/diagram.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponentComponent },
  { path: 'diagram', component: DiagramComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
