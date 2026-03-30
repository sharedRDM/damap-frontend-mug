import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { CommonModule } from '@angular/common';
import { HttpBackend } from '@angular/common/http';
import { InputWrapperComponent } from './input-wrapper/input-wrapper.component';
import { LegalAspectsDialogInfoComponent } from './question-dialogs/legal-aspects-dialog-info.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MetadataDialogInfoComponent } from './question-dialogs/metadata-dialog-info.component';
import { NgModule } from '@angular/core';
import { SearchFieldComponent } from './search-field/search-field.component';
import { StructureDialogInfoComponent } from './question-dialogs/structure-dialog-info.component';
import { TextareaWrapperComponent } from './textarea-wrapper/textarea-wrapper.component';
import { TooltipModule } from '../widgets/tooltip/tooltip.module';
import { ValidationDialogInfoComponent } from './question-dialogs/validation-dialog-info.component';

@NgModule({
  declarations: [
    InputWrapperComponent,
    TextareaWrapperComponent,
    SearchFieldComponent,
    ValidationDialogInfoComponent,
    MetadataDialogInfoComponent,
    StructureDialogInfoComponent,
    LegalAspectsDialogInfoComponent,
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
    StructureDialogInfoComponent,
    LegalAspectsDialogInfoComponent,

    // Materials
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatAutocompleteModule,
  ],
})
export class SharedModule {}
