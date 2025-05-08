import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-calendar-generator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './custom-calendar-generator.component.html',
  styleUrls: ['./custom-calendar-generator.component.css'],
})
export class CustomCalendarGeneratorComponent {
  year = new Date().getFullYear();
  month = new Date().getMonth() + 1;
  calendar: string[][] = [];
  monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  breakdown: string[] = [];

  generate() {
    const firstDay = new Date(this.year, this.month - 1, 1).getDay();
    const daysInMonth = new Date(this.year, this.month, 0).getDate();
    const weeks: string[][] = [];
    let week: string[] = Array(firstDay).fill('');
    for (let day = 1; day <= daysInMonth; day++) {
      week.push(day.toString());
      if (week.length === 7) {
        weeks.push(week);
        week = [];
      }
    }
    if (week.length) {
      while (week.length < 7) week.push('');
      weeks.push(week);
    }
    this.calendar = weeks;
    this.breakdown = [
      `Year: ${this.year}, Month: ${this.monthNames[this.month - 1]}`,
      `First day of month: ${firstDay} (0=Sun)`,
      `Days in month: ${daysInMonth}`,
      `Calendar generated as a 2D array (weeks x days).`,
    ];
  }
}
