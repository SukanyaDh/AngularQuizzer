import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  imports:[RouterLink],
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  currentRoute: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.currentRoute = this.router.url;
    
    // Subscribe to route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currentRoute = event.url;
    });
  }

  // Check if the given route is the active route
  isActive(route: string): boolean {
    return this.currentRoute.startsWith(route);
  }

  // Handle logout
  logout() {
    // Add your logout logic here
    console.log('Logout clicked');
    // Example: this.authService.logout();
    // this.router.navigate(['/login']);
  }
}
