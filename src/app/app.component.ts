import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/admin/layouts/header/header.component";
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from "./components/admin/layouts/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CommonModule, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  showHeader = false;

  title = 'AngularQuizzer';
  showAdminLayout = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Check URL on initialization
    this.checkAdminRoute(this.router.url);

    // Subscribe to route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.checkAdminRoute(event.url);
    });
  }

  private checkAdminRoute(url: string): void {
    // Show admin layout only for URLs that include 'admin/'
    this.showAdminLayout = url.includes('admin/');
  }

}
