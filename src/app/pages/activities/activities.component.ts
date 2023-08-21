import { Component } from '@angular/core';
import {postsData} from '../../../assets/data/posts';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent {
  posts = postsData

  constructor() { }

  ngOnInit(): void {
  }

}
