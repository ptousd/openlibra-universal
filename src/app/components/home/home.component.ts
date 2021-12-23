import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookDTO } from 'src/app/model/book.dto';
import { MessageService } from 'src/app/services/message.service';
import { OpenlibraService } from 'src/app/services/openlibra.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  books: BookDTO[] = [];
  loaded: boolean;
  name: string | null;
  category_id: string | null;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private openlibraService: OpenlibraService,
    private messageService: MessageService
  ) {
    this.loaded = false;
    this.category_id = null;
    this.name = null;
    this.activatedRoute.params.subscribe((routeParams) => {
      this.name = routeParams.name;
      if (!this.name) this.name = 'Novedades';
      this.loadBooks(routeParams.id);
    });
  }

  loadBooks(category_id: string) {
    this.loaded = false;
    const filter = category_id
      ? 'category=' + category_id + '&criteria=most_viewed'
      : 'order=newest';
    this.openlibraService.getBooks(filter).subscribe(
      (books: BookDTO[]) => {
        this.loaded = true;
        this.books = books;
      },
      (error) => {
        console.log(error);
        this.messageService.showMessage('booksFeedback', error.message);
      }
    );
  }

  showDetails(bookId: string) {
    this.router.navigateByUrl('/book/' + bookId);
  }

  convertUrlToHttps(url: string): string {
    return url.replace('http://', 'https://');
  }

  ngOnInit(): void {}
}
