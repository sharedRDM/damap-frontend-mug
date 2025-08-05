import { Component, OnInit } from '@angular/core';

import { BackendService } from '../../services/backend.service';
import { Banner } from '../../domain/banner';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-banner',
  templateUrl: './app-banner.component.html',
  styleUrls: ['./app-banner.component.css'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, TranslateModule],
})
export class AppBannerComponent implements OnInit {
  constructor(private backendService: BackendService) {}

  banner: Banner = {
    title: 'Default Title',
    description: 'Default Description',
    dismissible: true,
    color: '#ffffff',
  };

  bannerVisible = true;

  dismissBanner() {
    this.bannerVisible = false;
  }

  ngOnInit(): void {
    this.backendService.getAppBanner().subscribe(banner => {
      if (!banner) {
        this.bannerVisible = false;
      }
      this.banner = banner;
    });
  }
}
