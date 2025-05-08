import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface UnitCategory {
  name: string;
  units: { name: string; factor: number; offset?: number }[];
}

@Component({
  selector: 'app-unit-converter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './unit-converter.component.html',
  styleUrls: ['./unit-converter.component.css'],
})
export class UnitConverterComponent {
  categories: UnitCategory[] = [
    {
      name: 'Length (meters)',
      units: [
        { name: 'Meters', factor: 1 },
        { name: 'Centimeters', factor: 100 },
        { name: 'Millimeters', factor: 1000 },
        { name: 'Kilometers', factor: 0.001 },
        { name: 'Inches', factor: 39.3701 },
        { name: 'Feet', factor: 3.28084 },
        { name: 'Yards', factor: 1.09361 },
        { name: 'Miles', factor: 0.000621371 },
      ],
    },
    {
      name: 'Weight (kilograms)',
      units: [
        { name: 'Kilograms', factor: 1 },
        { name: 'Grams', factor: 1000 },
        { name: 'Milligrams', factor: 1000000 },
        { name: 'Pounds', factor: 2.20462 },
        { name: 'Ounces', factor: 35.274 },
      ],
    },
    {
      name: 'Temperature (Celsius)',
      units: [
        { name: 'Celsius', factor: 1 },
        { name: 'Fahrenheit', factor: 1.8, offset: 32 },
        { name: 'Kelvin', factor: 1, offset: 273.15 },
      ],
    },
  ];
  selectedCategory = this.categories[0];
  fromUnit = this.categories[0].units[0];
  toUnit = this.categories[0].units[1];
  input: number | null = null;
  result: number | null = null;
  errorMessage: string = '';
  breakdown: string[] = [];
  isLoading = false;

  onCategoryChange() {
    this.fromUnit = this.selectedCategory.units[0];
    this.toUnit = this.selectedCategory.units[1];
    this.input = null;
    this.result = null;
    this.breakdown = [];
    this.errorMessage = '';
  }

  convert() {
    this.errorMessage = '';
    this.breakdown = [];
    this.result = null;
    if (this.input === null || isNaN(this.input)) {
      this.errorMessage = 'Please enter a valid value.';
      return;
    }
    this.isLoading = true;
    setTimeout(() => {
      let value = this.input!;
      let result = 0;
      if (this.selectedCategory.name.startsWith('Temperature')) {
        // Convert to Celsius first
        if (this.fromUnit.name === 'Fahrenheit') value = (value - 32) / 1.8;
        else if (this.fromUnit.name === 'Kelvin') value = value - 273.15;
        // Convert from Celsius to target
        if (this.toUnit.name === 'Fahrenheit') result = value * 1.8 + 32;
        else if (this.toUnit.name === 'Kelvin') result = value + 273.15;
        else result = value;
        this.breakdown = [
          `Converted to Celsius: ${value}`,
          `Converted to ${this.toUnit.name}: ${result}`,
        ];
      } else {
        // Convert to base (meters or kilograms)
        value = value / this.fromUnit.factor;
        // Convert to target
        result = value * this.toUnit.factor;
        this.breakdown = [
          `Converted to base: ${value}`,
          `Converted to ${this.toUnit.name}: ${result}`,
        ];
      }
      this.result = result;
      this.isLoading = false;
    }, 200);
  }
}
