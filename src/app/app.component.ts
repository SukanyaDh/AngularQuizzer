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

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Hide header on login page, show on all other pages
      this.showHeader = !this.router.url.includes('/login');
      console.log(this.showHeader)
    });
  }

}
