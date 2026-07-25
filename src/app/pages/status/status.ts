import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status.html',
  styleUrl: './status.scss',
})
export class Status {
  placeholderServices = [
    { name: 'proxmox', up: true },
    { name: 'pi-hole', up: true },
    { name: 'jellyfin', up: true },
    { name: 'nginx proxy manager', up: true },
  ];
}