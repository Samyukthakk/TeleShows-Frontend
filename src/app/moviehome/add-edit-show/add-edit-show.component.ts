import { HttpClient } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { TeleService } from '../tele.service';
import { ShowDTO } from '../model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-edit-show',
  templateUrl: './add-edit-show.component.html',
  styleUrls: ['./add-edit-show.component.scss'],
})
export class AddEditShowComponent implements OnChanges {
  @Input() displayAddModal: boolean = true;
  @Input() selectedShowToEdit: any = null;
  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickAdd: EventEmitter<ShowDTO> = new EventEmitter<ShowDTO>();
  formType: string = '';
  genreList: any;
  constructor(
    private fb: UntypedFormBuilder,
    private http: HttpClient,
    private teleService: TeleService,
    private messageService: MessageService
  ) {
    this.getGenreList();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.selectedShowToEdit) {
      this.formType = 'Edit';
      this.movieForm.patchValue(this.selectedShowToEdit);
    } else {
      this.formType = 'Add';
      this.movieForm.reset();
    }
  }

  movieForm = this.fb.group({
    id: [null],
    name: [null, Validators.required],
    description: [null,[Validators.required, Validators.maxLength(30), Validators.minLength(3)],],
    duration: [null, Validators.required],
    rating: [null, Validators.required],
    genre: [{}, Validators.required],
  });

  closeModal() {
    this.clickClose.emit(true);
  }

  addEditShow() {
    this.teleService
      .saveEditMovie(this.movieForm.value, this.selectedShowToEdit)
      .subscribe(
        (res: any) => {
          this.clickAdd.emit(res);
          this.movieForm.reset();
          this.clickClose.emit(true);
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Show Added Successfully',
          });
        },
        (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Error Try Again',
          });
          console.log('error occoured');
        }
      );
  }

  getId(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }

  getGenreList() {
    this.teleService.getGenre().subscribe((res: any) => {
      this.genreList = res;
    });
  }

}
