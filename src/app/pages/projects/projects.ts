import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  placeholderRepos = [
    { name: 'doorcodeapi', language: 'Python', stars: 0, description: 'Single-use, time-limited door access codes. FastAPI + PostgreSQL.' },
    { name: 'Plantesp32', language: 'C++', stars: 0, description: 'ESP32 automated plant monitor with soil sensors and MQTT.' },
    { name: 'shadeisroot-web', language: 'TypeScript', stars: 0, description: 'This site. Angular frontend, self-hosted.' },
  ];
}