import { Component, OnInit } from '@angular/core';
import { TeleService } from './tele.service';
import { GenreDTO, ShowDTO } from './model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent implements OnInit {
  displayAddModal = false;
  showList: ShowDTO[] = [];
  searchval: string = '';
  showData: ShowDTO[] = [];
  selectedShowToEdit: any = null;
  rating: any;
  genreDataProvider: any[] = [];
  ratingDataProvider: string[] = ['Low to High', 'High to Low'];
  constructor(
    private teleService: TeleService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getShows();
    this.getGenres();
  }

  getShows() {
    this.teleService.getMovies().subscribe((res: any) => {
      this.showData = res;
      this.showList = [...this.showData];
    });
  }

  getGenres() {
    this.teleService.getGenre().subscribe({
      next: (res: GenreDTO[]) => {
        this.genreDataProvider = res.map((genre: GenreDTO) => genre.name);
      },
    });
  }

  showAddModel() {
    this.displayAddModal = true;
    this.selectedShowToEdit = null;
  }

  hideAddModal(value: boolean) {
    this.displayAddModal = !value;
  }

  saveShowToList(value: any) {
    this.getShows();
  }

  showEditDetails(show: ShowDTO) {
    this.displayAddModal = true;
    this.selectedShowToEdit = show;
  }

  deleteShow(show: ShowDTO) {
    this.teleService.deleteShow(show.id).subscribe(
      (res: any) => {
        this.getShows();
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Show Deleted Successfully',
        });
      },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Error Try Again',
        });
      }
    );
  }

  onChangeGenre(genre: string) {
    if (genre === null) {
      this.showList = [...this.showData];
    } else {
      this.showList = this.showData.filter(
        (show: ShowDTO) => show.genre.name === genre
      );
    }
  }

  onChangeSort(value: string) {
    let ascSort: boolean = value === 'Low to High';
    this.showList.sort((show1: ShowDTO, show2: ShowDTO) => {
      if (show1.rating < show2.rating) {
        return ascSort ? -1 : 1;
      } else if (show1.rating > show2.rating) {
        return ascSort ? 1 : -1;
      }
      return 0;
    });
  }

  getImagePath(show: ShowDTO): string {
    switch (show.genre.name) {
      case 'Action':
        return '../../assets/action.png';
      case 'Drama':
        return '../../assets/drama.png';
      case 'Romance':
        return '../../assets/romance.png';
      case 'Thriller':
        return '../../assets/thriller.png';
      case 'Whodunnit':
        return '../../assets/whodunit.png';
      case 'Horror':
        return '../../assets/horror.png';
      default:
        return '../../assets/action.png';
    }
  }

  searchItem() {
    if (this.searchval == null || this.searchval == '') {
      this.showList = [...this.showData];
    } else {
      this.showList = this.showData.filter((show: ShowDTO) =>
        show.name?.toLowerCase().match(this.searchval.toLowerCase())
      );
    }
  }
}
