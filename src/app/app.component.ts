import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderService } from './Services/loader.service';
import { CommonModule } from '@angular/common';

import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { ChartComponent } from './Components/chart/chart.component';
import { SidenavbarComponent } from './Components/sidenavbar/sidenavbar.component';
import { GridLayoutComponent } from './Components/grid-layout/grid-layout.component';
import { ApiService } from './Services/api.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    SidenavbarComponent,
    GridLayoutComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'if-else-cloud-project';
  profileList = [
    'assets/profile1.png',
    'assets/profile2.png',
    'assets/profile3.png',
    'assets/profile4.png',
    'assets/profile5.png',
  ];
  @ViewChild('chartContainer', { read: ViewContainerRef })
  chartContainer!: ViewContainerRef;
  isBrowser: boolean;
  apiData: any;
  constructor(
    public loaderService: LoaderService,
    private apiservice: ApiService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    loaderService.show();
  }
  getData() {
    this.apiservice
      .getData()

      .subscribe((data: any) => {
        this.apiData = data;
        this.apiData.grid_data = this.apiData.grid_data.map(
          (row: any, index: number) => ({
            ...row,
            selected: false,
            profilePic: this.profileList[index % 5],
          })
        );
        // this.apiData.grid_data = this.apiData.grid_data.slice(0, 10);
        console.log(this.apiData);
        this.loaderService.hide();
      });
  }
  async ngAfterViewInit() {
    if (this.isBrowser) {
      const { ChartComponent } = await import(
        './Components/chart/chart.component'
      );
      this.chartContainer.createComponent(ChartComponent);
      this.getData();
    }
  }
}
