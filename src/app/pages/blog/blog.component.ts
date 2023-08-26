import { Component } from '@angular/core';
import {postsData} from '../../../assets/data/posts';

@Component({
  selector: 'app-activities',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  posts = postsData

  constructor() { }

  ngOnInit(): void {
  }

}
