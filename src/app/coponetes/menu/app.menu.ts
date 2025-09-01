import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'menu',
  standalone: true,
  imports: [CommonModule, RouterLink], 
  templateUrl: './app.menu.html',
  styleUrls: ['./app.menu.scss']
})
export class menu {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}