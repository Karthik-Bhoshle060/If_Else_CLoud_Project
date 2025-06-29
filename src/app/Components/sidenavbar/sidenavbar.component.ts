import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoaderService } from '../../Services/loader.service';

@Component({
  selector: 'app-sidenavbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidenavbar.component.html',
  styleUrl: './sidenavbar.component.scss',
})
export class SidenavbarComponent {
  navbarImageList = [
    'assets/people.png',
    'assets/pie-chart.png',
    'assets/bar-chart.png',
    'assets/settings.png',
    'assets/pie-chart.png',
    'assets/bar-chart.png',
    'assets/settings.png',
    'assets/pie-chart.png',
    'assets/bar-chart.png',
  ];
  constructor(public loaderService: LoaderService) {}
}
