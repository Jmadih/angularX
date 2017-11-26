import {NgModule} from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatOptionModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


export let Mat_MODULES: any = [
  BrowserAnimationsModule,
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatInputModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatProgressBarModule,
  MatSliderModule,
  MatRadioModule,
  MatSnackBarModule,
  MatIconModule,
  MatToolbarModule,
  MatSelectModule,
  MatOptionModule,
  MatDialogModule,
  MatTooltipModule
];

@NgModule({
  exports: [...Mat_MODULES],
})
export class MatModule {
}
