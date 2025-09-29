import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // Needed for ngIf/ngFor etc.

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  // Input for the main application title
  @Input() appLogo: string = 'assets/images/logo.png'; // Default logo path
  @Input() appName: string = 'Quiz App';

  @Output() profileClicked = new EventEmitter<void>();
  @Output() logoutClicked = new EventEmitter<void>();

  onProfileClick(): void {
    this.profileClicked.emit();
    console.log('My Profile clicked!');
    // In a real app, you'd navigate: this.router.navigate(['/profile']);
  }

  onLogoutClick(): void {
    this.logoutClicked.emit();
    console.log('Logout clicked!');
    // In a real app, you'd handle logout logic: this.authService.logout();
  }

}