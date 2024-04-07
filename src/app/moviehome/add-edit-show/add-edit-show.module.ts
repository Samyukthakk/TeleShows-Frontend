import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditShowComponent } from './add-edit-show.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import {MessagesModule} from 'primeng/messages';
import { RatingModule } from 'primeng/rating';
@NgModule({
  declarations: [
    AddEditShowComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    InputTextModule,
    HttpClientModule,
    DropdownModule,
    MessagesModule,
    InputNumberModule,
    RatingModule
  ],
  exports: [
    AddEditShowComponent
  ]
})
export class AddEditMovieModule { }
