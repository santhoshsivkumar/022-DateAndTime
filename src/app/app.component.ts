import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { ThemesComponent } from './shared/themes/themes.component';
import { GoBackComponent } from './shared/go-back/go-back.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    NavBarComponent,
    ThemesComponent,
    GoBackComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ToolBox App';
  constructor(public router: Router) {}
}
