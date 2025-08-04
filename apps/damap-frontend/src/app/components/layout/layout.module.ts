// App imports
import { AppBannerModule, EnvBannerModule } from '@damap/core';

import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
// Material imports
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    EnvBannerModule,
    AppBannerModule,

    // Material modules
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  declarations: [LayoutComponent],
  exports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    EnvBannerModule,
    AppBannerModule,
    LayoutComponent,

    // Material modules
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
})
export class LayoutModule {}
