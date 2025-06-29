import { Component, Input } from '@angular/core';
import { LoaderService } from '../../Services/loader.service';
import { ApiService } from '../../Services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grid-layout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './grid-layout.component.html',
  styleUrl: './grid-layout.component.scss',
})
export class GridLayoutComponent {
  profileList = [
    'assets/profile1.png',
    'assets/profile2.png',
    'assets/profile3.png',
    'assets/profile4.png',
    'assets/profile5.png',
  ];
  isAllMemberSelected: boolean = false;
  isEditOrDelete: string = '';
  isVisible = false;
  //title: string = 'Popup Title';
  @Input() apiData: any;
  selectedRecord: any;
  constructor(
    private apiservice: ApiService,
    public loaderService: LoaderService
  ) {}

  toggleSelectAll(isChecked: boolean) {
    this.apiData.grid_data.forEach((row: any) => (row.selected = isChecked));
    this.isAllMemberSelected = isChecked;
  }
  onRowCheckboxChange(data: any, index: number) {
    const allSelected = this.apiData.grid_data.every(
      (row: any) => row.selected
    );
    this.isAllMemberSelected = allSelected;
  }
  getProfileImage(index: number) {
    return this.profileList[index % 5];
  }

  deleteOREditRecord(data: any, action: string) {
    this.isVisible = true;
    this.selectedRecord = data;
    this.isEditOrDelete = action;
  }
  deleteRecord() {
    this.apiData.grid_data = this.apiData.grid_data.filter(
      (obj: any) => obj.email !== this.selectedRecord.email
    );
    this.close();
  }

  close() {
    this.isVisible = false;
    this.selectedRecord = null;
    this.isEditOrDelete = '';
  }
}
