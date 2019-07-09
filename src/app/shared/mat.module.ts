import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatOptionModule,
  MatProgressBarModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


export let MatMODULES: any = [
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
  exports: [...MatMODULES],
})
export class MatModule {
}
