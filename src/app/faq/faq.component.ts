import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable()

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.sass']
})
export class FaqComponent implements OnInit {

  faqs: Array<any> | undefined;

  constructor(private http: HttpClient) {
    this.http.get<any>('https://jsonplaceholder.typicode.com/posts').pipe(map((response: Response) => response.json()));
  }

  ngOnInit(): void {
  }

}
