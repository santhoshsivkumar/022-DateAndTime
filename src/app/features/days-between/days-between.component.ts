import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Add this import
import { GoBackComponent } from '../../shared/go-back/go-back.component';
@Component({
  selector: 'app-days-between',
  standalone: true,
  imports: [GoBackComponent,CommonModule, FormsModule], // Add FormsModule and CommonModule here
  templateUrl: './days-between.component.html',
  styleUrls: ['./days-between.component.css']
})
export class DaysBetweenComponent {
  startDate: string = '';
  endDate: string = '';
  daysBetween: number | null = null;

  calculateDaysBetween() {
    const start = new Date(this.startDate);
    const end = new Date(this.endDate);
    const timeDiff = Math.abs(end.getTime() - start.getTime());
    this.daysBetween = Math.floor(timeDiff / (1000 * 3600 * 24));
  }

  previewCustomTheme(theme: any) {
    document.documentElement.style.setProperty('--header-color', theme.headerColor);
    document.documentElement.style.setProperty('--background-color', theme.backgroundColor);
    document.documentElement.style.setProperty('--font-color', theme.fontColor);
  }
}
