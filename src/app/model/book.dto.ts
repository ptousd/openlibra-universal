import { CategoryDTO } from './category.dto';
import { TagDTO } from './tag.dto';

export interface BookDTO {
  ID: string;
  title: string;
  author: string;
  content: string;
  content_short: string;
  publisher: string;
  publisher_date: string;
  pages: string;
  language: string;
  url_details: string;
  url_download: string;
  cover: string;
  thumbnail: string;
  num_comments: string;
  categories: CategoryDTO[];
  tags: TagDTO[];
}
