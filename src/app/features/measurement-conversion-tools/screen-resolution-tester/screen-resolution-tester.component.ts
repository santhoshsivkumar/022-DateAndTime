import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-screen-resolution-tester',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './screen-resolution-tester.component.html',
  styleUrls: ['./screen-resolution-tester.component.css'],
})
export class ScreenResolutionTesterComponent implements OnInit {
  width: number = 0;
  height: number = 0;
  colorDepth: number = 0;
  breakdown: string[] = [];

  ngOnInit() {
    this.detectResolution();
  }

  detectResolution() {
    this.width = window.screen.width;
    this.height = window.screen.height;
    this.colorDepth = window.screen.colorDepth;
    this.breakdown = [
      `Screen width: ${this.width} px`,
      `Screen height: ${this.height} px`,
      `Color depth: ${this.colorDepth} bits per pixel`,
    ];
  }
}
