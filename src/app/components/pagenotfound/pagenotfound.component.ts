import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css'],
})
export class PageNotFoundComponent implements OnInit {
  public href: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.href = this.router.url;
  }
}
