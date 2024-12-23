import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { InputWrapperComponent } from './input-wrapper/input-wrapper.component';
import { LegalAspectsDialogInfoComponent } from './question-dialogs/legal-aspects-dialog-info.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MetadataDialogInfoComponent } from './question-dialogs/metadata-dialog-info.component';
import { NgModule } from '@angular/core';
import { SearchFieldComponent } from './search-field/search-field.component';
import { TextareaWrapperComponent } from './textarea-wrapper/textarea-wrapper.component';
import { TooltipModule } from '../widgets/tooltip/tooltip.module';
import { TranslateModule } from '@ngx-translate/core';
import { ValidationDialogInfoComponent } from './question-dialogs/validation-dialog-info.component';

@NgModule({
  declarations: [
    InputWrapperComponent,
    TextareaWrapperComponent,
    SearchFieldComponent,
    LegalAspectsDialogInfoComponent,
    ValidationDialogInfoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    TooltipModule,
    MatButtonModule,
    MatDialogModule,

    // Materials
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconButton,
  ],
  exports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    InputWrapperComponent,
    TextareaWrapperComponent,
    TooltipModule,
    SearchFieldComponent,
    MetadataDialogInfoComponent,
    ValidationDialogInfoComponent,
    LegalAspectsDialogInfoComponent,

    // Materials
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
  ],
})
export class SharedModule {}
