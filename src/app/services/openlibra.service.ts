import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookDTO } from '../model/book.dto';
import { CategoryDTO } from '../model/category.dto';

@Injectable({
  providedIn: 'root',
})
export class OpenlibraService {
  urlApi: string;

  constructor(private http: HttpClient) {
    this.urlApi = 'https://www.etnassoft.com/api/v1/get/?';
  }

  getCategories(): Observable<CategoryDTO[]> {
    return this.http.get<CategoryDTO[]>(this.urlApi + 'get_categories');
  }

  getBooks(filter: string): Observable<BookDTO[]> {
    return this.http.get<BookDTO[]>(this.urlApi + filter);
  }

  getBookById(id: string): Observable<BookDTO[]> {
    return this.http.get<BookDTO[]>(this.urlApi + 'id=' + id);
  }
}
