import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'secureUrl' })
export class SecureUrlPipe implements PipeTransform {
  constructor() {}

  transform(url: string) {
    return url.replace('http://', 'https://');
  }
}
