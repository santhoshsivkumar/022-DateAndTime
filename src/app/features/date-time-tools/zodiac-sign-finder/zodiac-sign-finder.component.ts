import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ZodiacSign {
  name: string;
  start: string;
  end: string;
  description: string;
}

@Component({
  selector: 'app-zodiac-sign-finder',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './zodiac-sign-finder.component.html',
  styleUrls: ['./zodiac-sign-finder.component.css'],
})
export class ZodiacSignFinderComponent {
  birthDate: string = '';
  result: string = '';
  description: string = '';
  errorMessage: string = '';
  isLoading = false;
  breakdown: string[] = [];

  zodiacSigns: ZodiacSign[] = [
    {
      name: 'Aries',
      start: '03-21',
      end: '04-19',
      description: 'Courageous, energetic, willful, commanding, leading.',
    },
    {
      name: 'Taurus',
      start: '04-20',
      end: '05-20',
      description: 'Pleasure seeking, loves control, dependable, grounded.',
    },
    {
      name: 'Gemini',
      start: '05-21',
      end: '06-20',
      description: 'Cerebral, chatty, loves learning and education, charming.',
    },
    {
      name: 'Cancer',
      start: '06-21',
      end: '07-22',
      description: 'Emotional, group oriented, seeks security, family.',
    },
    {
      name: 'Leo',
      start: '07-23',
      end: '08-22',
      description: 'Generous, organized, protective, beautiful.',
    },
    {
      name: 'Virgo',
      start: '08-23',
      end: '09-22',
      description: 'Particular, logical, practical, sense of duty, critical.',
    },
    {
      name: 'Libra',
      start: '09-23',
      end: '10-22',
      description: 'Balanced, seeks beauty, sense of justice.',
    },
    {
      name: 'Scorpio',
      start: '10-23',
      end: '11-21',
      description:
        'Passionate, exacting, loves extremes, combative, reflective.',
    },
    {
      name: 'Sagittarius',
      start: '11-22',
      end: '12-21',
      description: 'Happy, absent minded, creative, adventurous.',
    },
    {
      name: 'Capricorn',
      start: '12-22',
      end: '01-19',
      description: 'Timeless, driven, calculating, ambitious.',
    },
    {
      name: 'Aquarius',
      start: '01-20',
      end: '02-18',
      description:
        'Forward thinking, communicative, people oriented, stubborn, generous.',
    },
    {
      name: 'Pisces',
      start: '02-19',
      end: '03-20',
      description: 'Likeable, energetic, passionate, sensitive.',
    },
  ];

  findZodiacSign() {
    this.errorMessage = '';
    this.result = '';
    this.description = '';
    this.breakdown = [];
    if (!this.birthDate) {
      this.errorMessage = 'Please enter your birth date.';
      return;
    }
    const [year, month, day] = this.birthDate.split('-').map(Number);
    if (!year || !month || !day) {
      this.errorMessage = 'Invalid date.';
      return;
    }
    this.isLoading = true;
    setTimeout(() => {
      const mmdd = `${month.toString().padStart(2, '0')}-${day
        .toString()
        .padStart(2, '0')}`;
      let found = false;
      for (const sign of this.zodiacSigns) {
        if (
          (sign.start <= mmdd && mmdd <= sign.end) ||
          (sign.start > sign.end && (mmdd >= sign.start || mmdd <= sign.end))
        ) {
          this.result = sign.name;
          this.description = sign.description;
          this.breakdown.push(`Your birth date: ${this.birthDate}`);
          this.breakdown.push(`Zodiac range: ${sign.start} to ${sign.end}`);
          this.breakdown.push(`Sign matched: ${sign.name}`);
          found = true;
          break;
        }
      }
      if (!found) {
        this.errorMessage = 'Could not determine zodiac sign.';
      }
      this.isLoading = false;
    }, 400);
  }
}
