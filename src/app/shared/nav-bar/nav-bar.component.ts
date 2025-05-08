import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  links = [
    { path: '', label: 'Home' },
    { path: '/calculate-age', label: 'Calculate Age' },
    { path: '/days-between', label: 'Days Between Dates' },
  ];
}
