import { Component, OnInit, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-themes',
  imports: [FormsModule,CommonModule, RouterModule],
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {
  @Output() themeChanged = new EventEmitter<any>(); // Emit theme changes

  darkMode: boolean = false;
  customThemeEnabled: boolean = false;
  headerColor: string = '#ffffff';
  backgroundColor: string = '#f0f0f0';
  fontColor: string = '#000000';
  showPopup: boolean = false; // Manage popup visibility
  customThemes: any[] = []; // Store custom themes
  lastAppliedDefaultTheme: any = null;
  lastAppliedCustomTheme: any = null;

  constructor(private elementRef: ElementRef) {}

  defaultThemes = [
    {
      name: "Clear Themes",
      colors: {
        textColor: "",
        backgroundColor: "",
        headerColor: "",
      },
    },
    {
      name: "Classic Green",
      colors: {
        textColor: "",
        backgroundColor: "",
        headerColor: "#00B300",
      },
    },
    {
      name: "Classic Red",
      colors: {
        textColor: "",
        backgroundColor: "",
        headerColor: "#FF2A00",
      },
    },
    {
      name: "Pure Pink",
      colors: {
        textColor: "#000000",
        backgroundColor: "#ffc3de",
        headerColor: "#ffc3de",
      },
    },
    {
      name: "Modern Orange",
      colors: {
        textColor: "#000000",
        backgroundColor: "#ff7a38",
        headerColor: "#c2c2c2",
      },
    },
    {
      name: "Modern Red",
      colors: {
        textColor: "#000000",
        backgroundColor: "#dadada",
        headerColor: "#e6210c",
      },
    },
    // Add more theme defaults as needed
  ];

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    const savedCustomThemes = localStorage.getItem('customThemes');

    if (savedCustomThemes) {
      this.customThemes = JSON.parse(savedCustomThemes);
    }

    if (savedTheme) {
      const theme = JSON.parse(savedTheme);
      this.applyTheme(theme);
    } else {
      // Apply the first default theme if no saved theme is found
      const defaultTheme = this.defaultThemes[0].colors;
      this.lastAppliedDefaultTheme = defaultTheme;
      this.applyTheme(defaultTheme);
    }
  }

  togglePopup(event: MouseEvent) {
    event.stopPropagation(); // Prevent the click from propagating to the document
    this.showPopup = !this.showPopup;
  }

  @HostListener('document:click', ['$event'])
  closePopupOnOutsideClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (
      this.showPopup &&
      !this.elementRef.nativeElement.contains(target) &&
      !target.closest('.toggle-popup-button') // Ensure the button is excluded
    ) {
      this.showPopup = false;
    }
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      this.customThemeEnabled = false; // Disable custom themes when dark mode is enabled
      const darkModeTheme = {
        headerColor: '#333',
        backgroundColor: '#333',
        textColor: '#fff'
      };
      this.lastAppliedDefaultTheme = darkModeTheme;
      this.applyTheme(darkModeTheme);
    } else {
      this.resetTheme();
    }
  }

  enableCustomTheme() {
    this.customThemeEnabled = !this.customThemeEnabled;
    if (this.customThemeEnabled) {
      this.darkMode = false; // Disable dark mode when custom themes are enabled
      if (this.lastAppliedCustomTheme) {
        this.applyTheme(this.lastAppliedCustomTheme);
      }
    } else {
      if (this.lastAppliedDefaultTheme) {
        this.applyTheme(this.lastAppliedDefaultTheme);
      }
    }
  }

  applyTheme(theme: any) {
    if (this.darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }

    document.documentElement.style.setProperty('--header-color', theme.headerColor || 'var(--header-color)');
    document.documentElement.style.setProperty('--background-color', theme.backgroundColor || 'var(--body-color)');
    document.documentElement.style.setProperty('--font-color', theme.textColor || 'var(--text-color)');

    this.headerColor = theme.headerColor || 'var(--header-color)';
    this.backgroundColor = theme.backgroundColor || 'var(--body-color)';
    this.fontColor = theme.textColor || 'var(--text-color)';

    localStorage.setItem('theme', JSON.stringify(theme));
    this.themeChanged.emit(theme); // Notify listeners about the theme change
  }

  resetTheme() {
    localStorage.removeItem('theme');
    document.documentElement.style.removeProperty('--header-color');
    document.documentElement.style.removeProperty('--background-color');
    document.documentElement.style.removeProperty('--font-color');
  }

  submitCustomTheme() {
    const customTheme = {
      headerColor: this.headerColor,
      backgroundColor: this.backgroundColor,
      fontColor: this.fontColor
    };
    this.customThemes.push(customTheme);
    localStorage.setItem('customThemes', JSON.stringify(this.customThemes));
    this.lastAppliedCustomTheme = customTheme;
    this.applyTheme(customTheme);
  }

  deleteCustomTheme(index: number) {
    this.customThemes.splice(index, 1);
    localStorage.setItem('customThemes', JSON.stringify(this.customThemes));
    if (this.customThemes.length === 0) {
      this.customThemeEnabled = false;
      if (this.lastAppliedDefaultTheme) {
        this.applyTheme(this.lastAppliedDefaultTheme);
      }
    }
    this.showPopup = false; // Ensure popup closes after deletion
  }

  previewCustomTheme(theme: any) {
    document.documentElement.style.setProperty('--header-color', theme.headerColor);
    document.documentElement.style.setProperty('--background-color', theme.backgroundColor);
    document.documentElement.style.setProperty('--font-color', theme.fontColor);
  }
}
