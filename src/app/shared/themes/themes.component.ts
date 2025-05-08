import { Component, OnInit, HostListener } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-themes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css'],
})
export class ThemesComponent implements OnInit {
  isOpen = false;
  isDarkMode = false;
  activeThemeIndex = 2; // Default to the 3rd theme (index 2)
  activeCustomThemeIndex: number = -1; // Default to no active custom theme
  uniqueColor: string | null = null;
  defaultThemes = [
    {
      name: 'Clear Themes',
      colors: { textColor: '', backgroundColor: '', headerColor: '' },
    },
    {
      name: 'Classic Green',
      colors: {
        textColor: '#00B300',
        backgroundColor: '', // Fallback color if others are empty
        headerColor: '',
      },
    },
    {
      name: 'Classic Red',
      colors: {
        textColor: '#FF2A00',
        backgroundColor: '', // Fallback color if others are empty
        headerColor: '',
      },
    },
    {
      name: 'Pure Pink',
      colors: {
        textColor: '#000000',
        backgroundColor: '#ffc3de',
        headerColor: '#ffc3de',
      },
    },
    {
      name: 'Modern Orange',
      colors: {
        textColor: '#000000',
        backgroundColor: '#ff7a38',
        headerColor: '#c2c2c2',
      },
    },
    {
      name: 'Modern Red',
      colors: {
        textColor: '#000000',
        backgroundColor: '#dadada',
        headerColor: '#e6210c',
      },
    },
  ].map((theme) => {
    const { textColor, backgroundColor, headerColor } = theme.colors;
    this.uniqueColor =
      textColor && backgroundColor && headerColor
        ? null
        : textColor || backgroundColor || headerColor; // Default fallback color
    return {
      ...theme,
      colors: {
        textColor: textColor as string,
        backgroundColor: backgroundColor as string,
        headerColor: headerColor as string,
      },
    };
  });

  isCustomThemeEnabled = false;
  isAddingNewTheme = false;
  newTheme = { headerColor: '', backgroundColor: '', textColor: '' };
  customThemes: {
    name: string;
    colors: {
      headerColor: string;
      backgroundColor: string;
      textColor: string;
    };
  }[] = [];

  ngOnInit() {
    const storedThemeIndex = localStorage.getItem('activeThemeIndex');
    const storedCustomThemeIndex = localStorage.getItem(
      'activeCustomThemeIndex'
    );
    const storedDarkMode = localStorage.getItem('isDarkMode');
    const storedCustomThemes = localStorage.getItem('customThemes');
    const storedCustomThemeEnabled = localStorage.getItem(
      'isCustomThemeEnabled'
    );

    // Apply the second default theme by default on the first page load
    if (storedThemeIndex !== null) {
      this.activeThemeIndex = parseInt(storedThemeIndex, 10);
    } else {
      this.activeThemeIndex = 1; // Default to the second theme (index 1)
      localStorage.setItem(
        'activeThemeIndex',
        this.activeThemeIndex.toString()
      );
    }

    if (storedCustomThemeIndex !== null) {
      this.activeCustomThemeIndex = parseInt(storedCustomThemeIndex, 10);
    }

    this.applyTheme(
      this.defaultThemes[this.activeThemeIndex].colors,
      this.activeThemeIndex
    );

    if (storedDarkMode !== null) {
      this.isDarkMode = JSON.parse(storedDarkMode);
      document.documentElement.setAttribute(
        'data-theme',
        this.isDarkMode ? 'dark' : 'light'
      );
    }

    if (storedCustomThemes) {
      this.customThemes = JSON.parse(storedCustomThemes);
    }

    if (storedCustomThemeEnabled !== null) {
      this.isCustomThemeEnabled = JSON.parse(storedCustomThemeEnabled);
      if (this.isCustomThemeEnabled && this.activeCustomThemeIndex >= 0) {
        this.applyTheme(
          this.customThemes[this.activeCustomThemeIndex].colors,
          this.activeCustomThemeIndex,
          true // Indicate this is a custom theme
        );
      }
    }
  }

  togglePopup() {
    this.isOpen = !this.isOpen;
  }

  closePopup() {
    this.isOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const modal = document.querySelector('.themes__model');
    const button = document.querySelector('.themes__button');

    // Exclude clicks on specific buttons or their child elements
    const excludedClasses = [
      'custom-theme__add-button',
      'custom-theme__save-button',
      'custom-theme__delete-button',
    ];
    if (
      this.isOpen &&
      modal &&
      button &&
      !modal.contains(target) &&
      !button.contains(target) &&
      !excludedClasses.some((cls) => target.classList.contains(cls))
    ) {
      this.closePopup();
    }
  }

  toggleTheme(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.isDarkMode = inputElement.checked; // Get the toggle value from the input
    localStorage.setItem('isDarkMode', JSON.stringify(this.isDarkMode));

    // Apply the dark or light theme
    document.documentElement.setAttribute(
      'data-theme',
      this.isDarkMode ? 'dark' : 'light'
    );
  }

  toggleCustomThemes(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const isEnablingCustomThemes = inputElement.checked;

    this.isCustomThemeEnabled = isEnablingCustomThemes;
    localStorage.setItem(
      'isCustomThemeEnabled',
      JSON.stringify(this.isCustomThemeEnabled)
    );

    if (isEnablingCustomThemes) {
      // Re-enable custom themes and apply the last active custom theme
      if (
        this.activeCustomThemeIndex >= 0 &&
        this.activeCustomThemeIndex < this.customThemes.length
      ) {
        this.applyTheme(
          this.customThemes[this.activeCustomThemeIndex].colors,
          this.activeCustomThemeIndex,
          true // Indicate this is a custom theme
        );
      } else if (this.customThemes.length > 0) {
        // If no active custom theme is set, apply the first custom theme
        this.activeCustomThemeIndex = 0;
        localStorage.setItem(
          'activeCustomThemeIndex',
          this.activeCustomThemeIndex.toString()
        );
        this.applyTheme(
          this.customThemes[this.activeCustomThemeIndex].colors,
          this.activeCustomThemeIndex,
          true // Indicate this is a custom theme
        );
      } else {
        // No custom themes available, show the "Add New Theme" button
        this.isAddingNewTheme = false;
      }
    } else {
      // Disable custom themes and reapply the last active default theme
      this.isAddingNewTheme = false; // Hide the form
      if (
        this.activeThemeIndex >= 0 &&
        this.activeThemeIndex < this.defaultThemes.length
      ) {
        this.applyTheme(
          this.defaultThemes[this.activeThemeIndex].colors,
          this.activeThemeIndex,
          false // Indicate this is a default theme
        );
      } else {
        // If no valid activeThemeIndex is set, default to the first theme
        this.activeThemeIndex = 0;
        localStorage.setItem(
          'activeThemeIndex',
          this.activeThemeIndex.toString()
        );
        this.applyTheme(
          this.defaultThemes[this.activeThemeIndex].colors,
          this.activeThemeIndex,
          false // Indicate this is a default theme
        );
      }
    }
  }

  addNewTheme() {
    this.isAddingNewTheme = true;

    // Apply the current applied theme's colors to the color pickers
    const currentTheme =
      this.activeThemeIndex >= 0
        ? this.customThemes[this.activeThemeIndex]?.colors ||
          this.defaultThemes[this.activeThemeIndex]?.colors
        : { headerColor: '', backgroundColor: '', textColor: '' };

    this.newTheme = {
      headerColor: currentTheme.headerColor || '',
      backgroundColor: currentTheme.backgroundColor || '',
      textColor: currentTheme.textColor || '',
    };

    // Ensure the modal remains open
    this.isOpen = true;
  }

  saveNewTheme() {
    const themeName = `Custom Theme ${this.customThemes.length + 1}`;
    this.customThemes.push({ name: themeName, colors: { ...this.newTheme } });
    localStorage.setItem('customThemes', JSON.stringify(this.customThemes));

    // Set the newly added theme as the active custom theme
    this.activeCustomThemeIndex = this.customThemes.length - 1;
    localStorage.setItem(
      'activeCustomThemeIndex',
      this.activeCustomThemeIndex.toString()
    );

    // Apply the newly added theme
    this.applyTheme(
      this.customThemes[this.activeCustomThemeIndex].colors,
      this.activeCustomThemeIndex,
      true // Indicate this is a custom theme
    );

    this.isAddingNewTheme = false; // Hide the form after saving but keep the modal open
    this.isOpen = true;
  }

  cancelTheme() {
    this.isAddingNewTheme = false; // Hide the form but keep the modal open
    this.isOpen = true;
  }

  updateLiveTheme() {
    this.applyTheme(this.newTheme, this.activeThemeIndex); // Apply live changes without saving
  }

  deleteCustomTheme() {
    if (
      this.activeCustomThemeIndex >= 0 &&
      this.activeCustomThemeIndex < this.customThemes.length
    ) {
      // Remove the active custom theme
      this.customThemes.splice(this.activeCustomThemeIndex, 1);
      localStorage.setItem('customThemes', JSON.stringify(this.customThemes));

      if (this.customThemes.length === 0) {
        // If no custom themes are left, disable custom themes and apply the last active default theme
        this.isCustomThemeEnabled = false;
        localStorage.setItem('isCustomThemeEnabled', JSON.stringify(false));
        this.applyTheme(
          this.defaultThemes[this.activeThemeIndex].colors,
          this.activeThemeIndex
        );
        this.activeCustomThemeIndex = -1; // Reset active custom theme index
        localStorage.removeItem('activeCustomThemeIndex');
      } else {
        // Set the last available custom theme as the active theme
        this.activeCustomThemeIndex = Math.min(
          this.activeCustomThemeIndex,
          this.customThemes.length - 1
        );
        localStorage.setItem(
          'activeCustomThemeIndex',
          this.activeCustomThemeIndex.toString()
        );

        // Apply the new active custom theme
        this.applyTheme(
          this.customThemes[this.activeCustomThemeIndex].colors,
          this.activeCustomThemeIndex,
          true // Indicate this is a custom theme
        );
      }
    }
  }

  applyTheme(
    colors: { textColor: string; backgroundColor: string; headerColor: string },
    index: number,
    isCustomTheme: boolean = false
  ) {
    if (isCustomTheme) {
      this.activeCustomThemeIndex = index;
      localStorage.setItem(
        'activeCustomThemeIndex',
        this.activeCustomThemeIndex.toString()
      );
    } else {
      this.activeThemeIndex = index;
      localStorage.setItem(
        'activeThemeIndex',
        this.activeThemeIndex.toString()
      );
    }

    // Apply theme colors
    document.documentElement.style.setProperty(
      '--text-color',
      colors.textColor
    );
    document.documentElement.style.setProperty(
      '--body-color',
      colors.backgroundColor
    );
    document.documentElement.style.setProperty(
      '--header-color',
      colors.headerColor
    );

    // Store colors in local storage
    localStorage.setItem(
      'themeColors',
      JSON.stringify({
        textColor: colors.textColor,
        backgroundColor: colors.backgroundColor,
        headerColor: colors.headerColor,
      })
    );
  }
}
