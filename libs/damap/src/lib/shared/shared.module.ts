import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatDialogActions, MatDialogModule } from '@angular/material/dialog';

import { CommonModule } from '@angular/common';
import { InputWrapperComponent } from './input-wrapper/input-wrapper.component';
import { LegalAspectsDialogInfoComponent } from './question-dialogs/legal-aspects-dialog-info.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
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
    MetadataDialogInfoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    TooltipModule,
    MatButtonModule,

    // Materials
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDialogModule,
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
    MatDialogModule,
    MatInputModule,
    MatAutocompleteModule,
  ],
})
export class SharedModule {}
