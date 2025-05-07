import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-generator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.css'],
})
export class PasswordGeneratorComponent implements OnInit {
  passwordLength: number = 12;
  includeUppercase: boolean = true;
  includeLowercase: boolean = true;
  includeNumbers: boolean = true;
  includeSpecialChars: boolean = true;
  excludeAmbiguous: boolean = false;
  excludeBrackets: boolean = false;
  noRepeatedChars: boolean = false;
  generatedPassword: string = '';
  copyMessage: boolean = false;
  passwordStrength: string = 'weak'; // weak, medium, strong
  isGenerating: boolean = false;

  ngOnInit() {
    this.generatePassword(); // Generate a sample password on component load
  }

  generatePassword() {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChars = '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~';
    const ambiguousChars = 'iIl1L|o0O`\'_-":;.,';
    const brackets = '<>()[]{}';

    let characterPool = '';
    if (this.includeUppercase) characterPool += uppercase;
    if (this.includeLowercase) characterPool += lowercase;
    if (this.includeNumbers) characterPool += numbers;
    if (this.includeSpecialChars) characterPool += specialChars;

    if (this.excludeAmbiguous) {
      characterPool = characterPool
        .split('')
        .filter((c) => !ambiguousChars.includes(c))
        .join('');
    }

    if (this.excludeBrackets) {
      characterPool = characterPool
        .split('')
        .filter((c) => !brackets.includes(c))
        .join('');
    }

    if (!characterPool) {
      this.generatedPassword = 'Please select at least one character type.';
      return;
    }

    if (this.noRepeatedChars && this.passwordLength > characterPool.length) {
      this.generatedPassword =
        'Password length exceeds unique character pool size.';
      return;
    }

    const generateUniquePassword = () => {
      const passwordArray: string[] = [];
      while (passwordArray.length < this.passwordLength) {
        const char = characterPool.charAt(
          Math.floor(Math.random() * characterPool.length)
        );
        if (this.noRepeatedChars && passwordArray.includes(char)) continue;
        passwordArray.push(char);
      }
      return passwordArray.join('');
    };

    this.isGenerating = true;
    const animationInterval = setInterval(() => {
      this.generatedPassword = Array.from({ length: this.passwordLength }, () =>
        characterPool.charAt(Math.floor(Math.random() * characterPool.length))
      ).join('');
    }, 50);

    setTimeout(() => {
      clearInterval(animationInterval);
      this.generatedPassword = generateUniquePassword();
      this.isGenerating = false;
      this.calculatePasswordStrength();
    }, 2000);
  }

  calculatePasswordStrength() {
    const lengthScore =
      this.passwordLength >= 12 ? 2 : this.passwordLength >= 8 ? 1 : 0;
    const varietyScore =
      (this.includeUppercase ? 1 : 0) +
      (this.includeLowercase ? 1 : 0) +
      (this.includeNumbers ? 1 : 0) +
      (this.includeSpecialChars ? 1 : 0);

    const totalScore = lengthScore + varietyScore;

    if (totalScore >= 5) {
      this.passwordStrength = 'strong';
    } else if (totalScore >= 3) {
      this.passwordStrength = 'medium';
    } else {
      this.passwordStrength = 'weak';
    }
  }

  copyToClipboard() {
    if (this.generatedPassword) {
      navigator.clipboard
        .writeText(this.generatedPassword)
        .then(() => {
          this.copyMessage = true;
          setTimeout(() => {
            this.copyMessage = false;
          }, 2000); // Reset to clipboard icon after 2 seconds
        })
        .catch(() => {
          alert('Failed to copy password to clipboard. Please try again.');
        });
    }
  }
}
