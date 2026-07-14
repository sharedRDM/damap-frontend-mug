import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputWrapperComponent } from './input-wrapper/input-wrapper.component';
import { TextareaWrapperComponent } from './textarea-wrapper/textarea-wrapper.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { TranslateModule } from '@ngx-translate/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TooltipModule } from '../widgets/tooltip/tooltip.module';
import { SearchFieldComponent } from './search-field/search-field.component';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MetadataDialogInfoComponent } from './question-dialogs/metadata-dialog-info.component';
import { StructureDialogInfoComponent } from './question-dialogs/structure-dialog-info.component';

@NgModule({
  declarations: [
    InputWrapperComponent,
    TextareaWrapperComponent,
    SearchFieldComponent,
    MetadataDialogInfoComponent,
    StructureDialogInfoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    TooltipModule,

    // Materials
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconButton,
    MatButtonModule,
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
    StructureDialogInfoComponent,

    // Materials
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDialogModule,
  ],
})
export class SharedModule {}
