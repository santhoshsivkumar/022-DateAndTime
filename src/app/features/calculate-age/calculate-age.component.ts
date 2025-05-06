import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Add this import

@Component({
  selector: 'app-calculate-age',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add FormsModule and CommonModule here
  templateUrl: './calculate-age.component.html',
  styleUrls: ['./calculate-age.component.css']
})
export class CalculateAgeComponent {
  birthDate: string = '';
  age: number | null = null;

  calculateAge() {
    const currentDate = new Date();
    const birthDate = new Date(this.birthDate);
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    const m = currentDate.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && currentDate.getDate() < birthDate.getDate())) {
      this.age = age - 1;
    }
    this.age = age;
  }
}
