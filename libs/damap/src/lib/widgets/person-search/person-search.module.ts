import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatOptionModule } from '@angular/material/core';
import { NgModule } from '@angular/core';
import { PersonSearchComponent } from './person-search.component';
import { SharedModule } from '../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [PersonSearchComponent],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    SharedModule,

    // Materials
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatListModule,
  ],
  exports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    PersonSearchComponent,

    // Materials
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatAutocompleteModule,
    MatOptionModule,
  ],
})
export class PersonSearchModule {}
