import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDTO } from 'src/app/model/book.dto';
import { MessageService } from 'src/app/services/message.service';
import { OpenlibraService } from 'src/app/services/openlibra.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  book: BookDTO;
  loaded: boolean;
  panelOpenState = false;
  score: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private openlibraService: OpenlibraService,
    private location: Location,
    private messageService: MessageService
  ) {
    this.loaded = false;
    this.score = 0;
    this.book = {
      ID: '',
      title: '',
      author: '',
      content: '',
      content_short: '',
      publisher: '',
      publisher_date: '',
      pages: '',
      language: '',
      url_details: '',
      url_download: '',
      cover: '',
      thumbnail: '',
      num_comments: '',
      categories: [],
      tags: [],
    };
    this.loadBook(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  loadBook(bookId: string | null) {
    if (bookId) {
      this.openlibraService.getBookById(bookId).subscribe(
        (books: BookDTO[]) => {
          this.loaded = true;
          this.book = books[0];
        },
        (error) => {
          console.log(error);
          this.messageService.showMessage('bookFeedback', error.message);
        }
      );
    }
  }

  back() {
    this.location.back();
  }

  ngOnInit(): void {}
}
