import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowComponent } from './show.component';
import {HttpClientModule} from '@angular/common/http'
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEditMovieModule } from './add-edit-show/add-edit-show.module';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import {MessageService} from 'primeng/api';
import { FiltershowComponent } from './filtershow/filtershow.component';

@NgModule({
  declarations: [
    ShowComponent,
    FiltershowComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DataViewModule,
    RatingModule,
    TableModule,
    InputTextModule,
    FormsModule,
    DropdownModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    AddEditMovieModule,
    ToastModule,
    MessagesModule

  ],
  exports: [
    ShowComponent
  ],
  providers: [
    MessageService
  ]
})
export class MoviehomeModule { }
