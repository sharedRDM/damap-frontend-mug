import { AppBannerComponent } from './app-banner.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppBannerComponent],
  imports: [CommonModule, MatCardModule, MatIconModule],
  exports: [AppBannerComponent],
})
export class AppBannerModule {}
