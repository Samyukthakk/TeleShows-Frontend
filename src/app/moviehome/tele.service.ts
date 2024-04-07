import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenreDTO, ShowDTO } from './model';

@Injectable({
  providedIn: 'root',
})
export class TeleService {
  constructor(private http: HttpClient) {}

  getMovies(): Observable<ShowDTO> {
    return this.http.get<ShowDTO>('http://localhost:9229/api/teleservice');
  }

  saveEditMovie(postData: ShowDTO, selectToEdit: ShowDTO): Observable<ShowDTO> {
    if (!selectToEdit) {
      return this.http.post<ShowDTO>(
        'http://localhost:9229/api/teleservice',
        postData
      );
    } else {
      return this.http.post<ShowDTO>(
        'http://localhost:9229/api/teleservice',
        postData
      );
    }
  }

  getGenre(): Observable<GenreDTO[]> {
    return this.http.get<GenreDTO[]>(
      'http://localhost:9229/api/teleservice/genre'
    );
  }

  deleteShow(id: any) {
    return this.http.delete(
      `http://localhost:9229/api/teleservice?showId=${id}`
    );
  }
}
