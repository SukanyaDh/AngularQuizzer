import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports:[RouterLink, CommonModule],
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  features = [
    {
      icon: 'quiz',
      title: 'Diverse Quizzes',
      description: 'Access a wide variety of quizzes on different topics and difficulty levels.'
    },
    {
      icon: 'timer',
      title: 'Timed Challenges',
      description: 'Test your knowledge against the clock with our timed quiz challenges.'
    },
    {
      icon: 'analytics',
      title: 'Track Progress',
      description: 'Monitor your improvement with detailed performance analytics.'
    },
    {
      icon: 'emoji_events',
      title: 'Earn Badges',
      description: 'Unlock achievements and badges as you master different topics.'
    }
  ];
}
